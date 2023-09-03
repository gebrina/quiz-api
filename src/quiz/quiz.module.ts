import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { QuizService } from './quiz.service';
import { QuizResolver } from './quiz.resolver';
import { ChoiceModule } from 'src/choice/choice.module';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz]), ChoiceModule],
  providers: [QuizService, QuizResolver],
})
export class QuizModule {}
