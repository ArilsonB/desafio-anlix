# desafio-anlix

# Incialização

cd backend && npm install

docker compose up -d

npm run db:create

npm run migration:run

npm run seed:run

npm run start:dev

cd web

npm install

npm run dev


O que foi feito?

* Consultar, para cada paciente, cada uma das características individualmente e cada uma delas sendo a mais recente disponível;
* Consultar em uma única chamada, todas as características de um paciente, com os valores mais recentes de cada uma;
* Consultar para uma determinada data (dia, mês e ano), todas as características existentes de todos os pacientes da base de dados; (Formato da data yyyy-MM-dd)
* Consultar o valor mais recente de uma característica de um paciente que esteja entre um intervalo de valores a ser especificado na chamada da API;
* Consultar pacientes que contenham um nome ou parte de um nome a ser especificado na chamada da API.