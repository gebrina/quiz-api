import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Quiz } from 'src/entities/quiz.entity';
import { QuizService } from './quiz.service';
import { ChoiceInput, QuizInput } from 'src/input-types/quiz.input';
import { ChoiceService } from 'src/choice/choice.service';

@Resolver((of) => Quiz)
export class QuizResolver {
  constructor(
    @Inject(QuizService) private quizService: QuizService,
    @Inject(ChoiceService) private readonly choiceService: ChoiceService,
  ) {}

  @Query(() => [Quiz])
  findAllQuiz() {
    return this.quizService.findAll();
  }

  @Query(() => Quiz)
  findOneQuiz(@Args('quizId') quizId: string) {
    return this.quizService.findOne(quizId);
  }

  @Mutation(() => Quiz)
  async createQuiz(@Args('quizInput') quizInput: QuizInput) {
    const newQuiz = await this.quizService.create(quizInput);
    quizInput.answers.forEach(async (choice) => {
      choice.quiz = newQuiz;
      await this.choiceService.create(choice);
    });
    return newQuiz;
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
