import { IIndex } from "./index.type";

export interface IPatient {
  cpf: string;
  nome: string;
  idade: number;
  rg: string;
  data_nasc: Date;
  sexo: string;
  signo: string;
  mae: string;
  pai: string;
  email: string;
  senha: string;
  cep: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  telefone_fixo: string;
  celular: string;
  altura: string;
  peso: number;
  tipo_sanguineo: string;
  cor: string;
  indexes: IIndex[];
}
