"use client";
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
import { format, parse } from "date-fns";
import BarChart from "./BarChart";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { TipoIndice } from "@/types/index.type";
import { ChevronDown } from "lucide-react";

type PatientPageProps = {
  params: {
    cpf: string;
  };
};

const PatientPage: NextPage<PatientPageProps> = ({ params }): JSX.Element => {
  const [indexType, setIndexType] = React.useState<TipoIndice>(
    TipoIndice.CARDIACO
  );
  const { patientData, latestCardiacData, latestPulmonarData } =
    useGetPatientData(params.cpf);

  if (
    patientData.isLoading &&
    latestCardiacData.isLoading &&
    latestPulmonarData.isLoading
  ) {
    return <div>Carregando dados do paciente...</div>;
  }

  const latestCardiacDate = format(
    parse(
      latestCardiacData?.data?.data || "1999-01-01",
      "yyyy-MM-dd",
      new Date()
    ),
    "dd/MM/yyyy"
  );

  const latestPulmonatDate = format(
    parse(
      latestPulmonarData?.data?.data || "1999-01-01",
      "yyyy-MM-dd",
      new Date()
    ),
    "dd/MM/yyyy"
  );

  return (
    <div className="flex flex-col space-y-4">
      <div className="my-4 flex-col">
        <h1 className="text-3xl">
          Indices Recentes do Paciente: {patientData?.data?.nome}
        </h1>
        <Separator className="my-4" />
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-1">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Indice Cardiaco</CardTitle>
              <CardDescription>
                Indice registrado em: {latestCardiacDate}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Epoch: {latestCardiacData?.data?.epoch}</p>
              <p>Indice: {latestCardiacData?.data?.indice}</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col flex-1">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Indice Pulmonar</CardTitle>
              <CardDescription>
                Indice registrado em: {latestPulmonatDate}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {latestPulmonarData?.data ? (
                <>
                  <p>Epoch: {latestPulmonarData?.data?.epoch}</p>
                  <p>Indice: {latestPulmonarData?.data?.indice}</p>
                </>
              ) : (
                "Nenhum indice encontrado"
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row justify-between">
                <div>Grafico Temporal</div>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-auto">
                        Tipo do Indice <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuCheckboxItem
                        className="capitalize"
                        checked={indexType === TipoIndice.CARDIACO}
                        onCheckedChange={(value) =>
                          setIndexType(TipoIndice.CARDIACO)
                        }
                      >
                        Indice Cardiaco
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        className="capitalize"
                        checked={indexType === TipoIndice.PULMONAR}
                        onCheckedChange={(value) =>
                          setIndexType(TipoIndice.PULMONAR)
                        }
                      >
                        Indice Pulmonar
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row justify-center">
            <BarChart cpf={params.cpf} indexType={indexType} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientPage;
