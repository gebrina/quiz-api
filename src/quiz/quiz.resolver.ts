import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Quiz } from 'src/entities/quiz.entity';

@Resolver((of) => Quiz)
export class QuizResolver {}
