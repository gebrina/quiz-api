import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Quiz } from './quiz.entity';

@ObjectType()
@Entity('users')
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field({ nullable: true })
  @CreateDateColumn({ default: new Date() })
  createdAt: Date;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field(() => String, { nullable: true })
  @Column()
  password: string;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updatedAt: Date;

  @Field((type) => [Quiz])
  @OneToMany((type) => Quiz, (quiz) => quiz.user)
  quizzes: Quiz[];
}
