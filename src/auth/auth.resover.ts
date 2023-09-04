import { Inject } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthInput } from 'src/input-types/auth.input';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResover {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Mutation('login')
  async login(@Args('user') user: AuthInput) {
    this.authService.login(user.email, user.password);
  }
}
