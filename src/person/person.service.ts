import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { PersonRepository } from './person.repository';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonRepository)
    private personsRepository: PersonRepository,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    return await this.personsRepository.createPerson(createPersonDto);
  }

  async findAll(): Promise<Person[]> {
    return await this.personsRepository.find();
  }

  async findOne(id: string): Promise<Person> {
    const person = await this.personsRepository.findOne(id);

    if (!person) {
      throw new NotFoundException();
    }

    return person;
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    return await this.personsRepository.update(id, updatePersonDto);
  }

  async remove(id: string): Promise<void> {
    await this.personsRepository.delete(id);
  }
}
