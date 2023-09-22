import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { UserInput } from 'src/input-types/user.input';
import { Public } from 'src/decorators/public.decorator';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  findAllUser() {
    return this.userService.findAll();
  }

  @Query(() => User)
  findOneUser(@Args('userId') userId: string) {
    return this.userService.findOne(userId);
  }

  @Mutation(() => User)
  @Public()
  createUser(@Args('user') user: UserInput) {
    return this.userService.create(user);
  }

  @Mutation(() => User)
  async updateUser(@Args('user') user: UserInput) {
    return this.userService.updateUser(user);
  }

  @Mutation(() => User)
  deleteUser(@Args('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
