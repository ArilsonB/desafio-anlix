import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { IPatient } from "@/types/patient.type";
import { createColumnHelper } from "@tanstack/react-table";
import Link from "next/link";

const columnHelper = createColumnHelper<IPatient>();

export const columns = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("cpf", {
    header: "CPF",
    cell: (info) => <span>{info.getValue()}</span>,
    enableHiding: false,
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
    enableHiding: false,
    cell: (info) => (
      <Button asChild>
        <Link href={`/patients/${info.row.original.cpf}`}>Ver indices</Link>
      </Button>
    ),
  }),
];
