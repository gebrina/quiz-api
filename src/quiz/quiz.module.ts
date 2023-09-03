import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { QuizService } from './quiz.service';
import { QuizResolver } from './quiz.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [QuizService, QuizResolver],
})
export class QuizModule {}
