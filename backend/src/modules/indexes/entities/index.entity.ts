import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { Patient } from '../../patient/entities/patient.entity';

export enum TipoIndice {
  CARDIACO = 'cardiaco',
  PULMONAR = 'pulmonar',
}

@Entity({ name: 'indices' })
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

  @Column()
  tipo_indice: string;

  @Column('decimal', { precision: 5, scale: 6 })
  indice: number;
}
