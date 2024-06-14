import { http } from "@/lib/http";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="space-y-4 my-4">
      <h1 className="text-3xl">Desafio Vaga Anlix</h1>
      <div className="space-y-2">
        <p>Tecnologias Utilizadas:</p>
        <ul className="list-[disc]">
          <li>PostgreSQL</li>
          <li>NodeJS</li>
          <li>Nest</li>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>Swagger</li>
          <li>React Chart 2</li>
        </ul>
      </div>

      <div>
        <p>Informações Extras:</p>
        <p>
          Documentação de api swagger acesse:{" "}
          <Link
            href={`${http.defaults.baseURL}/docs`}
          >{`${http.defaults.baseURL}/docs`}</Link>
        </p>
      </div>
    </div>
  );
}
