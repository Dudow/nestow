import { Module } from '@nestjs/common';
import { ProfessionService } from './profession.service';
import { ProfessionController } from './profession.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profession } from './entities/profession.entity';
import { ProfessionRepository } from './profession.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Profession, ProfessionRepository])],
  controllers: [ProfessionController],
  providers: [ProfessionService],
})
export class ProfessionModule {}
