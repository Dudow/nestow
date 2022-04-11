import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profession } from '../../profession/entities/profession.entity';

@Entity('persons')
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  phone: string;

  @ManyToOne(() => Profession, (profession) => profession.id)
  @Column('uuid')
  profession_id: string;
}
