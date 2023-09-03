import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Choice } from 'src/entities/choice.entity';

@Injectable()
export class ChoiseService {
  constructor(
    @InjectRepository(Choice) private readonly choiceSRepo: Repository<Choice>,
  ) {}

  async findAllChoice(): Promise<Choice[]> {
    return this.choiceSRepo.find({ relations: { quiz: true } });
  }

  async findOne(choiceId: string): Promise<Choice> {
    return await this.choiceSRepo.findOne({
      where: { id: choiceId },
      relations: {
        quiz: true,
      },
    });
  }

  async create(choice: Choice): Promise<Choice> {
    return await this.choiceSRepo.save(choice);
  }
}
