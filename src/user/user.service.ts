import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { UserInput } from 'src/input-types/user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  extractPasswordFromUser(user: User): Partial<User> {
    const { password, ...result } = user;
    return result;
  }

  async findOne(userId: string): Promise<Partial<User>> {
    const user = await this.userRepo.findOne({
      where: { id: userId },
      relations: { quizzes: true },
    });
    return this.extractPasswordFromUser(user);
  }

  async findUserByEmail(email: string) {
    return await this.userRepo.findOneBy({ email });
  }

  async create(user: UserInput): Promise<Partial<User>> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    const newUser = await this.userRepo.save(user);
    return this.extractPasswordFromUser(newUser);
  }

  async updateUser(user: UserInput): Promise<Partial<User>> {
    let userToBeUpdated = await this.findOne(user.id);
    if (!userToBeUpdated) throw new NotFoundException('Invalid  user id');
    userToBeUpdated = user;
    await this.userRepo.save(userToBeUpdated);
    return this.extractPasswordFromUser(userToBeUpdated as User);
  }

  async deleteUser(userId: string): Promise<String> {
    await this.userRepo.delete(userId);
    return userId;
  }
}
