import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from 'src/entities/choice.entity';
import { ChoiceService } from './choice.service';

@Module({
  imports: [TypeOrmModule.forFeature([Choice])],
  providers: [ChoiceService],
  exports: [ChoiceService],
})
export class ChoiceModule {}
