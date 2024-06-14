import React from "react";
import { NextPage } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useGetPatientData } from "./use-get-patient-data";

type PatientPageProps = {
  params: {
    cpf: string;
  };
};

const PatientPage: NextPage<PatientPageProps> = ({ params }): JSX.Element => {
  const { patientData, latestCardiacData, latestPulmonarData } =
    useGetPatientData(params.cpf);

  if (
    patientData.isLoading &&
    latestCardiacData.isLoading &&
    latestPulmonarData.isLoading
  ) {
    return <div>Carregando dados do paciente...</div>;
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="my-4 flex-col">
        <h1 className="text-3xl">Indices Recentes do Paciente: {}</h1>
        <Separator className="my-4" />
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Indice Cardiaco</CardTitle>
              <CardDescription>
                Indice registrado em: 00/00/0000
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
        <div className="flex flex-col flex-1">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Indice Pulmonar</CardTitle>
              <CardDescription>
                Indice registrado em: 00/00/0000
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Todos os Indices</CardTitle>
            <CardDescription>
              Todos os Indices Registrados do Paciente
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientPage;
