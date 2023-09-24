import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Quiz } from './quiz.entity';

@ObjectType()
@Entity()
export class Choice {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  answer: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.answers, { onDelete: 'CASCADE' })
  quiz: Quiz;
}
