import { Inject } from '@nestjs/common';
import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthInput } from 'src/input-types/auth.input';
import { AuthService } from './auth.service';
import { AuthUserModel } from './auth.user.model';

@Resolver(() => AuthUserModel)
export class AuthResover {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Mutation(() => AuthUserModel)
  async auth(@Args('user') user: AuthInput) {
    return this.authService.login(user.email, user.password);
  }
}
