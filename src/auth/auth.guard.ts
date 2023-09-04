import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = GqlExecutionContext.create(context).getContext();
    const access_token = request.headers.authorization.split(' ')[1];
    const verify = this.verifyToken(access_token);

    return verify;
  }

  verifyToken(access_token: string) {
    try {
      const isValidToken = this.jwtService.verify(access_token, {
        secret: process.env.JWT_SECRET,
      });
      return true;
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
