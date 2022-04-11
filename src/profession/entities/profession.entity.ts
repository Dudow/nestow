import { Person } from 'src/person/entities/person.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('professions')
export class Profession extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Person, (person) => person.profession_id)
  @JoinColumn({ name: 'id' })
  People: Person[];
}
