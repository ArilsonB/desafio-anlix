"use client";
import { http } from "@/lib/http";
import { useQuery } from "@tanstack/react-query";

async function fetchPatients(search?: string) {
  const response = await http.get("/patient", {
    params: {
      search,
    },
  });

  return response.data;
}

export const useGetPatients = (search?: string) => {
  const query = useQuery({
    queryKey: ["patients", search],
    queryFn: () => fetchPatients(search),
  });

  return query;
};
