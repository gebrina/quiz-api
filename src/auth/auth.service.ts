import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.findUserByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid Credentials');
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (isValidPassword) {
      const access_token = this.jwtService.sign({ sub: user.id, user });
      const { password, ...result } = user;
      return { access_token, user: result };
    } else {
      throw new UnauthorizedException('Invalid password');
    }
  }
}
