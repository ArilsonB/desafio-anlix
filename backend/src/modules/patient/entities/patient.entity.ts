import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Index } from '../../indexes/entities/index.entity';

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
  numero: string;

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

  @Column()
  altura: string;

  @Column()
  peso: number;

  @Column()
  tipo_sanguineo: string;

  @Column()
  cor: string;

  @OneToMany(() => Index, (index) => index.patient)
  @JoinColumn()
  indexes: Index[];
}
