import { Patient } from 'src/modules/patient/entities/patient.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

@Entity({ name: 'caracteristicas' })
export class Index {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf: string;

  @ManyToOne(() => Patient, (patient) => patient.cpf)
  @JoinColumn({ name: 'cpf' })
  patient: Relation<Patient>;

  @Column()
  epoch: number;

  @Column('decimal', { precision: 5, scale: 6 })
  ind_card: number;
}
