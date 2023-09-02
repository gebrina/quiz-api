import { InputType, Field, ID } from '@nestjs/graphql';
import { QuizInput } from './quiz.input';

@InputType()
export class QuizCategoryInput {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => [QuizInput])
  quizzes: QuizInput[];
}
