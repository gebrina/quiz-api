import { InputType, Field, ID } from '@nestjs/graphql';
import { QuizInput } from './quiz.input';

@InputType()
export class UserInput {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  password: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @Field(() => [QuizInput], { nullable: true })
  quizzes: QuizInput[];
}
