import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from 'src/entities/choice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Choice])],
})
export class ChoiceModule {}
