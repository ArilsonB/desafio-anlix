import { http } from "@/lib/http";
import { useQuery } from "@tanstack/react-query";

const fetchIndexes = async () => {
  const response = await http.get("/index");

  return response.data;
};

export const useGetIndexes = () => {
  const indexesQuery = useQuery({
    queryKey: ["indexes"],
    queryFn: async () => await fetchIndexes(),
  });

  return indexesQuery;
};
