import { Inject } from '@nestjs/common';
import { Resolver, Query, Parent, Args } from '@nestjs/graphql';
import { QuizCategory } from 'src/entities/quiz-category.entity';
import { QuizCategoryService } from './quiz-category.service';

@Resolver((of) => QuizCategory)
export class QuizCategoryResolver {
  constructor(
    @Inject(QuizCategoryService)
    private quizCategoryService: QuizCategoryService,
  ) {}
}
