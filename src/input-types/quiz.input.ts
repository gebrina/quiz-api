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

  @Field(() => String)
  qusetion: string;

  @Field(() => String)
  correctAnswer: string;

  @Field(() => [ChoiceInput])
  answers: ChoiceInput[];
}

@InputType()
export class ChoiceInput {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  answer: string;

  @Field(() => QuizInput, { nullable: true })
  quiz: QuizInput;
}
