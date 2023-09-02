import { InputType, Field, ID } from '@nestjs/graphql';
import { UserInput } from './user.input';
import { QuizCategoryInput } from './quiz-category.input';

@InputType()
export class QuizInput {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => [QuestionInput])
  questions: QuestionInput[];

  @Field(() => UserInput)
  user: UserInput;

  @Field(() => QuizCategoryInput)
  category: QuizCategoryInput;
}

@InputType()
export class QuestionInput {
  @Field(() => ID, { nullable: true })
  questionId: string;

  @Field(() => String)
  question: string;

  @Field(() => String)
  answer: string;

  @Field(() => [ChoiceInput])
  choices: ChoiceInput[];

  @Field(() => QuizInput)
  quiz: QuizInput;
}

@InputType()
export class ChoiceInput {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  choice: string;

  @Field(() => QuestionInput, { nullable: true })
  question: QuestionInput;
}
