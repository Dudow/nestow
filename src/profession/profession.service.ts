import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { UpdateProfessionDto } from './dto/update-profession.dto';
import { ProfessionRepository } from './profession.repository';

@Injectable()
export class ProfessionService {
  constructor(
    @InjectRepository(ProfessionRepository)
    private professionsRepository: ProfessionRepository,
  ) {}

  async create(createProfessionDto: CreateProfessionDto) {
    return await this.professionsRepository.createProfession(
      createProfessionDto,
    );
  }

  async findAll() {
    return await this.professionsRepository.getProfession();
  }

  async findOne(id: string) {
    return await this.professionsRepository.findOne(id);
  }

  update(id: number, updateProfessionDto: UpdateProfessionDto) {
    return `This action updates a #${id} profession`;
  }

  remove(id: number) {
    return `This action removes a #${id} profession`;
  }
}
