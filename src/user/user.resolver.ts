import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { UserInput } from 'src/input-types/user.input';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  findAllUser() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('user') user: UserInput) {
    return this.userService.create(user);
  }
}
