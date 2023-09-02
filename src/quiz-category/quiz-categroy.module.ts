import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizCategory } from 'src/entities/quiz-category.entity';
import { QuizCategoryService } from './quiz-category.service';
import { QuizCategoryResolver } from './quiz-category.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([QuizCategory])],
  providers: [QuizCategoryService, QuizCategoryResolver],
})
export class QuizCategoryModule {}
