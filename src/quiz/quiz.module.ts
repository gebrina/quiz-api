import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from 'src/entities/choice.entity';
import { Question } from 'src/entities/question.entity';
import { Quiz } from 'src/entities/quiz.entity';
import { QuizService } from './quiz.service';
import { QuizResolver } from './quiz.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Choice])],
  providers: [QuizService, QuizResolver],
})
export class QuizModule {}
