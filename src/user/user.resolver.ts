import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  findAllUser() {
    return this.userService.findAll();
  }
}
