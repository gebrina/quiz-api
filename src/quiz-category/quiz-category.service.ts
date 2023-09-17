import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizCategory } from 'src/entities/quiz-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizCategoryService {
  constructor(
    @InjectRepository(QuizCategory)
    private readonly quizCategoryRepo: Repository<QuizCategory>,
  ) {}

  async findAll(): Promise<QuizCategory[]> {
    return await this.quizCategoryRepo.find({
      relations: {
        quizzes: {
          answers: true,
          user: true,
        },
      },
    });
  }

  async findOne(id: string): Promise<QuizCategory> {
    return await this.quizCategoryRepo.findOne({
      where: { id },
      relations: {
        quizzes: {
          answers: true,
          user: true,
        },
      },
    });
  }

  async create(quizCategory: QuizCategory): Promise<QuizCategory> {
    return await this.quizCategoryRepo.save(quizCategory);
  }

  async update(quizCategory: QuizCategory): Promise<QuizCategory> {
    let categorytTbeUpdated = await this.findOne(quizCategory.id);
    if (!categorytTbeUpdated)
      throw new NotFoundException('Invalid category id');
    categorytTbeUpdated = quizCategory;
    return this.quizCategoryRepo.save(categorytTbeUpdated);
  }

  async delete(id: string): Promise<string> {
    await this.quizCategoryRepo.delete(id);
    return id;
  }
}
