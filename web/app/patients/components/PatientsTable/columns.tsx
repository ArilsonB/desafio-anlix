import { Patient } from "@/types/patient.type";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Patient>();

export const columns = [
  columnHelper.accessor("cpf", {
    header: "CPF",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("nome", {
    header: "Nome",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
];
