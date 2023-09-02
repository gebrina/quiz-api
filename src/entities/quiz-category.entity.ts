import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Quiz } from './quiz.entity';

@ObjectType()
@Entity()
export class QuizCategory {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field(() => [Quiz])
  @OneToMany(() => Quiz, (quiz) => quiz.category)
  quizzes: Quiz[];
}
