import { Button } from "@/components/ui/button";
import { IPatient } from "@/types/patient.type";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";

const columnHelper = createColumnHelper<IPatient>();

export const columns = [
  columnHelper.accessor("cpf", {
    header: "CPF",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("nome", {
    header: "Nome",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("email", {
    header: "E-mail",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("idade", {
    header: "Idade",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.accessor("celular", {
    header: "Celular",
    cell: (info) => <span>{info.getValue()}</span>,
  }),
  columnHelper.display({
    id: "action",
    header: "Ver Indices",
    cell: (info) => (
      <Button asChild>
        <Link href={`/patients/${info.row.original.cpf}`}>Ver indices</Link>
      </Button>
    ),
  }),
];
