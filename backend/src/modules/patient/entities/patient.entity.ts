import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'paciente' })
export class Patient {
  @PrimaryColumn()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column({ unique: true })
  rg: string;

  @Column({ type: 'date' })
  data_nasc: Date;

  @Column()
  sexo: string;

  @Column()
  signo: string;

  @Column()
  mae: string;

  @Column()
  pai: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column()
  cep: string;

  @Column()
  endereco: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  telefone_fixo: string;

  @Column()
  celular: string;

  @Column('decimal', { precision: 3, scale: 2 })
  altura: number;

  @Column()
  peso: number;

  @Column()
  tipo_sanguineo: string;

  @Column()
  cor: string;
}
