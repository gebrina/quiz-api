import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';

@Resolver((of) => User)
export class UserResolver {}
