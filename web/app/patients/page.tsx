import React from "react";
import { NextPage } from "next";
import { PatientsTable } from "./components/PatientsTable";

const PatientsPage: NextPage = (): JSX.Element => {
  return <PatientsTable />;
};

export default PatientsPage;
