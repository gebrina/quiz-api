import { Inject } from '@nestjs/common';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { QuizCategory } from 'src/entities/quiz-category.entity';
import { QuizCategoryService } from './quiz-category.service';
import { QuizCategoryInput } from 'src/input-types/quiz-category.input';
import { Public } from 'src/decorators/public.decorator';

@Resolver((of) => QuizCategory)
export class QuizCategoryResolver {
  constructor(
    @Inject(QuizCategoryService)
    private quizCategoryService: QuizCategoryService,
  ) {}

  @Query(() => [QuizCategory])
  @Public()
  findAllQuizCategory() {
    return this.quizCategoryService.findAll();
  }

  @Query(() => QuizCategory)
  findOneQuizCategory(@Args('categoryId') categoryId: string) {
    return this.quizCategoryService.findOne(categoryId);
  }

  @Mutation(() => QuizCategory)
  createQuizCategory(@Args('categoryInput') categoryInput: QuizCategoryInput) {
    return this.quizCategoryService.create(categoryInput);
  }

  @Mutation(() => QuizCategory)
  updateQuizCategory(@Args('categoryInput') categoryInput: QuizCategoryInput) {
    return this.quizCategoryService.update(categoryInput);
  }

  @Mutation(() => QuizCategory)
  deleteQuizCategory(@Args('categoryId') categoryId: string) {
    return this.quizCategoryService.delete(categoryId);
  }
}
