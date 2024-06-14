"use client";
import { http } from "@/lib/http";
import { IIndex, TipoIndice } from "@/types/index.type";
import { IPatient } from "@/types/patient.type";
import { useQuery } from "@tanstack/react-query";

const fetchPatientData = async (cpf: string): Promise<IPatient> => {
  const response = await http.get(`/patient/${cpf}`, {
    params: {},
  });

  return response.data;
};

const fetchLatestIndex = async (
  cpf: string,
  type: TipoIndice
): Promise<IIndex> => {
  const response = await http.get(`/patient/${cpf}/index`, {
    params: {
      index_type: type,
    },
  });

  return response.data;
};

export const useGetPatientData = (cpf: string) => {
  const patientData = useQuery({
    queryKey: ["patient", cpf],
    queryFn: async () => fetchPatientData(cpf),
  });

  const latestCardiacData = useQuery({
    queryKey: ["patient", cpf, TipoIndice.CARDIACO],
    queryFn: async () => fetchLatestIndex(cpf, TipoIndice.CARDIACO),
  });

  const latestPulmonarData = useQuery({
    queryKey: ["patient", cpf, TipoIndice.PULMONAR],
    queryFn: async () => fetchLatestIndex(cpf, TipoIndice.PULMONAR),
  });

  return { patientData, latestCardiacData, latestPulmonarData };
};
