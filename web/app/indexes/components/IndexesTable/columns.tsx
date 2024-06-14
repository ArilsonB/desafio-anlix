import { IIndex } from "@/types/index.type";
import { createColumnHelper } from "@tanstack/react-table";
import { format, parse } from "date-fns";
import { ptBR } from "date-fns/locale";

const columnHelper = createColumnHelper<IIndex>();

export const columns = [
  columnHelper.accessor("tipo_indice", {
    header: "Tipo",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("cpf", {
    header: "CPF",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("epoch", {
    header: "Epoch",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("indice", {
    header: "Indice",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("data", {
    header: "Data do Indice",
    cell: (info) => {
      const date = parse(info.getValue(), "yyyy-MM-dd", new Date());

      const formattedDate = format(date, "dd/MM/yyyy", {
        locale: ptBR,
      });

      return <span>{formattedDate}</span>;
    },
  }),
];
