import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  Column,
} from 'typeorm';
import { QuizCategory } from './quiz-category.entity';
import { User } from './user.entity';
import { Choice } from './choice.entity';

@ObjectType()
@Entity('quizzes')
export class Quiz {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => QuizCategory)
  @ManyToOne(() => QuizCategory, (category) => category.quizzes, {
    onDelete: 'NO ACTION',
  })
  category: QuizCategory;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.quizzes, { onDelete: 'NO ACTION' })
  user: User;

  @Field(() => String)
  @Column({ unique: true })
  qusetion: string;

  @Field(() => String)
  @Column()
  correctAnswer: string;

  @Field(() => [Choice])
  @OneToMany(() => Choice, (choice) => choice.quiz, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    eager: true,
  })
  answers: Choice[];
}
