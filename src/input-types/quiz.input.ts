import { InputType, Field, ID } from '@nestjs/graphql';
import { UserInput } from './user.input';
import { QuizCategoryInput } from './quiz-category.input';

@InputType()
export class QuizInput {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => UserInput)
  user: UserInput;

  @Field(() => QuizCategoryInput)
  category: QuizCategoryInput;
}
