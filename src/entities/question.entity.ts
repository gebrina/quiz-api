import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Choice } from './choice.entity';
import { Quiz } from './quiz.entity';

@ObjectType()
@Entity()
export class Question {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  questionId: string;

  @Field(() => String)
  @Column()
  question: string;

  @Field(() => String)
  @Column()
  answer: string;

  @Field(() => [Choice])
  @ManyToOne(() => Choice, (choice) => choice.question)
  choice: Choice[];

  @Field(() => Quiz)
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
}
