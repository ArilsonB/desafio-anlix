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

  @Column('real')
  indice: number;

  @Column({ type: 'date' })
  data: Date;

  @Column({
    type: 'enum',
    enum: TipoIndice,
  })
  tipo_indice: TipoIndice;
}
