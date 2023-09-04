import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { PUBLIC_KEY } from 'src/decorators/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = GqlExecutionContext.create(context).getContext();
    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const access_token = request.headers.authorization.split(' ')[1];
    const verify = this.verifyToken(access_token);
    return verify;
  }

  verifyToken(access_token: string) {
    try {
      const isValidToken = this.jwtService.verify(access_token, {
        secret: process.env.JWT_SECRET,
      });
      return isValidToken;
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
