import { InputType, Field, ID } from '@nestjs/graphql';
import { UserInput } from './user.input';
import { QuizCategoryInput } from './quiz-category.input';

@InputType()
export class Choice {
  @Field()
  label: string | number;

  @Field()
  answer: string;
}

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
  answer: string;

  @Field()
  choices: Choice[];
}
