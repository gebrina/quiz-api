import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Question } from './question.entity';

@ObjectType()
@Entity()
export class Choice {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  choice: string;

  @Field(() => Question)
  @ManyToOne(() => Question, (quetion) => quetion.choices)
  question: Question;
}
