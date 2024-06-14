"use client";
import { http } from "@/lib/http";
import { IIndex, TipoIndice } from "@/types/index.type";
import { useQuery } from "@tanstack/react-query";

const fetchIndexes = async (
  cpf: string,
  type: TipoIndice
): Promise<IIndex[]> => {
  const response = await http.get(`/patient/${cpf}/indexes`, {
    params: {
      index_type: type,
    },
  });

  return response.data;
};

export const useGetPatientIndexes = (cpf: string, type: TipoIndice) => {
  const indexesData = useQuery({
    queryKey: ["patient-indexes", cpf, type],
    queryFn: async () => fetchIndexes(cpf, type),
  });

  return indexesData;
};
