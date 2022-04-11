import { Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateProfessionDto } from './dto/create-profession.dto';
import { Profession } from './entities/profession.entity';

@EntityRepository(Profession)
export class ProfessionRepository extends Repository<Profession> {
  private logger = new Logger('ProfessionRepository');
  async createProfession(
    createProfessionDto: CreateProfessionDto,
  ): Promise<Profession> {
    const { description, title } = createProfessionDto;

    let profession = new Profession();

    profession = Object.assign(profession, {
      description,
      title,
    });

    await profession.save();

    return profession;
  }

  async getProfession(id?: string): Promise<Profession[] | Profession> {
    if (id) {
      const profession = await this.findOneOrFail(id);
      return profession;
    }

    const profession = await this.find();
    return profession;
  }
}
