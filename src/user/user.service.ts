import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserInput } from 'src/input-types/user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findAll(): Promise<UserInput[]> {
    return await this.userRepo.find();
  }

  async findOne(userId: string): Promise<UserInput> {
    return this.userRepo.findOneBy({ id: userId });
  }

  async create(user: UserInput): Promise<UserInput> {
    return await this.userRepo.save(user);
  }

  async updateUser(user: UserInput): Promise<UserInput> {
    let userToBeUpdated = await this.findOne(user.id);
    if (!userToBeUpdated) throw new NotFoundException('Invalid  user id');
    userToBeUpdated = user;
    return this.userRepo.save(userToBeUpdated);
  }

  async deleteUser(userId: string): Promise<void> {
    await this.userRepo.delete(userId);
  }
}
