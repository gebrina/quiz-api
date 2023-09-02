import { InputType, Field, ID } from '@nestjs/graphql';
import { QuizInput } from './quiz.input';

@InputType()
export class UserInput {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => [QuizInput])
  quizzes: QuizInput[];
}
