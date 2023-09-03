import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from 'src/entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepo: Repository<Quiz>,
  ) {}
  quizRelations = {
    category: true,
    questions: true,
    user: true,
  };

  async findAll(): Promise<Quiz[]> {
    return await this.quizRepo.find({ relations: this.quizRelations });
  }

  async findOne(quizId: string): Promise<Quiz> {
    return await this.quizRepo.findOne({
      where: { id: quizId },
      relations: this.quizRelations,
    });
  }

  async create(quiz: Quiz) {
    return await this.quizRepo.save(quiz);
  }

  async update(quiz: Quiz) {
    let quizTobeUpdated = await this.findOne(quiz.id);
    if (quizTobeUpdated) throw new BadRequestException();
    quizTobeUpdated = quiz;
    return await this.quizRepo.save(quizTobeUpdated);
  }

  async delete(quizId: string): Promise<string> {
    await this.quizRepo.delete(quizId);
    return quizId;
  }
}
