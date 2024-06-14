# desafio-anlix

# Como executar o projeto?

1. Clone o repositório

2. Instale os pacotes do backend com o comando: "cd backend && npm install"

3. Renomeie o arquivo ".env.example" para ".env" com: "mv .env.example .env" - Os dados padrão de acesso ao banco de dados já estão nesta env.

3. Suba o container do banco de dados: "docker compose up -d"

4. Crie o banco de dados com: "npm run db:create"

5. Importe a estrutura do banco de dados com: "npm run migration:run"

6. Importe os dados para o banco de dados com: "npm run seed:run"

7. Inicie o backend com "npm run start:dev"

8. Acesse o backend em: "http://localhost:3001"

Obs: Acesse a documentação das rotas com o swagger em "http://localhost:3001/docs"

9. Entre na pasta do frontend: "cd web" 

10. Instale os pacotes "npm install"

11. Rode o projeto: "npm run dev"

12. Acesse o frontend em: "http://localhost:3000"


O que foi feito?

* Consultar, para cada paciente, cada uma das características individualmente e cada uma delas sendo a mais recente disponível;
* Consultar em uma única chamada, todas as características de um paciente, com os valores mais recentes de cada uma;
* Consultar para uma determinada data (dia, mês e ano), todas as características existentes de todos os pacientes da base de dados; (Formato da data yyyy-MM-dd)
* Consultar o valor mais recente de uma característica de um paciente que esteja entre um intervalo de valores a ser especificado na chamada da API;
* Consultar pacientes que contenham um nome ou parte de um nome a ser especificado na chamada da API.