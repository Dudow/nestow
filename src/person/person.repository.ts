import { EntityRepository, Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './entities/person.entity';

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {
  async createPerson(createPersonDto: CreatePersonDto): Promise<Person> {
    const { email, phone, profession_id, username } = createPersonDto;

    let person = new Person();

    person = Object.assign(person, {
      email,
      phone,
      username,
      profession_id,
    });

    await person.save();

    return person;
  }

  async getPersons(id?: string): Promise<Person[] | Person> {
    if (id) {
      const person = await this.findOne(id);
      return person;
    }

    const persons = await this.find();
    return persons;
  }
}
