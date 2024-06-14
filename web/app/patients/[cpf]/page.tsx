import React from "react";
import { NextPage } from "next";

const PatientPage: NextPage = (): JSX.Element => {
  return (
    <div className="flex flex-column">
      <div>
        <h1>Indices Recentes do Paciente: {}</h1>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h2>Indice Cardiaco</h2>
        </div>
        <div className="flex flex-col">
          <h2>Indice Pulmonar</h2>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <h2>Todos os Indices</h2>
        </div>
        <div>Tabela Aqui...</div>
      </div>
    </div>
  );
};

export default PatientPage;
