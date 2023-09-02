import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class QuestionInput {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String)
  question: string;

  @Field(() => String)
  answer: string;

  @Field(() => [ChoiceInput])
  chioces: ChoiceInput[];
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

@InputType()
export class QuizInput {
  @Field(() => ID)
  id: string;
}
