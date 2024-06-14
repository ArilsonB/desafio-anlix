import { IPatient } from "./patient.type";

export enum TipoIndice {
  CARDIACO = "cardiaco",
  PULMONAR = "pulmonar",
}

export interface IIndex {
  id: number;
  cpf: string;
  patient: IPatient; // or you could reference IPatient if you have the corresponding interface
  epoch: number;
  indice: number;
  data: Date;
  tipo_indice: TipoIndice;
}
