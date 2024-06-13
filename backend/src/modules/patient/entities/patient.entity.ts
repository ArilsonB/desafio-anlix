import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'paciente' })
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;
}
