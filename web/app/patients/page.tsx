import React from "react";
import { NextPage } from "next";
import { PatientsTable } from "./components/PatientsTable";
import { Separator } from "@/components/ui/separator";

const PatientsPage: NextPage = (): JSX.Element => {
  return (
    <div className="flex flex-row">
      <div className="my-4 flex-col">
        <h1 className="text-3xl">Pacientes</h1>
        <Separator className="my-4" />
      </div>
      <div>
        <PatientsTable />
      </div>
    </div>
  );
};

export default PatientsPage;
