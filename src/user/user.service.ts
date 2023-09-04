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

  async findOne(userId: string): Promise<User> {
    return await this.userRepo.findOneBy({ id: userId });
  }

  async findUserByEmail(email: string) {
    return await this.userRepo.findOneBy({ email });
  }

  async create(user: UserInput): Promise<Partial<User>> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;

    const newUser = await this.userRepo.save(user);
    const { password, ...createdUser } = newUser;
    return createdUser;
  }

  async updateUser(user: UserInput): Promise<User> {
    let userToBeUpdated = await this.findOne(user.id);
    if (!userToBeUpdated) throw new NotFoundException('Invalid  user id');
    userToBeUpdated = user;
    return this.userRepo.save(userToBeUpdated);
  }

  async deleteUser(userId: string): Promise<String> {
    await this.userRepo.delete(userId);
    return userId;
  }
}
