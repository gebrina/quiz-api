import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid Credentials');
    if (user.password === password) {
      const access_token = this.jwtService.sign({ sub: user.id, user });
      return access_token;
    } else {
      throw new UnauthorizedException('Invalid password');
    }
  }
}
