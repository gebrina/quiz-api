import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { QuizCategory } from './quiz-category.entity';
import { User } from './user.entity';

@ObjectType()
@Entity('quizes')
export class Quiz {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => QuizCategory)
  @Column()
  @ManyToOne(() => QuizCategory, (category) => category.quizs)
  category: QuizCategory;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.quizzes)
  user: User;

  @Field()
  @Column()
  questing: string;

  @Field()
  @Column()
  answer: string;
}
