import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Quiz } from 'src/entities/quiz.entity';
import { QuizService } from './quiz.service';
import { QuizInput } from 'src/input-types/quiz.input';

@Resolver((of) => Quiz)
export class QuizResolver {
  constructor(@Inject(QuizService) private quizService: QuizService) {}

  @Query(() => [Quiz])
  findAllQuiz() {
    return this.quizService.findAll();
  }

  @Query(() => Quiz)
  findOneQuiz(@Args('quizId') quizId: string) {
    return this.quizService.findOne(quizId);
  }

  @Mutation(() => Quiz)
  createQuiz(@Args('quizInput') quizInput: QuizInput) {
    return this.quizService.create(quizInput);
  }

  @Mutation(() => Quiz)
  updateQuiz(@Args('quizInput') quizInput: QuizInput) {
    return this.quizService.update(quizInput);
  }

  @Mutation(() => Quiz)
  deleteQuiz(@Args('quizId') quizId: string) {
    return this.quizService.delete(quizId);
  }
}
