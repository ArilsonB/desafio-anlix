import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'caracteristicas' })
export class Characteristic {
  @PrimaryGeneratedColumn()
  id: number;
}
