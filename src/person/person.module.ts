import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { Person } from './entities/person.entity';
import { PersonRepository } from './person.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Person, PersonRepository])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
