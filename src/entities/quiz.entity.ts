import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { QuizCategory } from './quiz-category.entity';
import { User } from './user.entity';
import { Question } from './question.entity';

@ObjectType()
@Entity('quizes')
export class Quiz {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => QuizCategory)
  @ManyToOne(() => QuizCategory, (category) => category.quizzes)
  category: QuizCategory;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.quizzes)
  user: User;

  @Field(() => [Question])
  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
