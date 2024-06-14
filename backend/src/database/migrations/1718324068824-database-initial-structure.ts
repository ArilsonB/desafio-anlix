import { MigrationInterface, QueryRunner } from "typeorm";

export class DatabaseInitialStructure1718324068824 implements MigrationInterface {
    name = 'DatabaseInitialStructure1718324068824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."indices_tipo_indice_enum" AS ENUM('cardiaco', 'pulmonar')`);
        await queryRunner.query(`CREATE TABLE "indices" ("id" SERIAL NOT NULL, "cpf" character varying NOT NULL, "epoch" integer NOT NULL, "indice" real NOT NULL, "data" date NOT NULL, "tipo_indice" "public"."indices_tipo_indice_enum" NOT NULL, CONSTRAINT "PK_8d7904e826a6671884d4636ade3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paciente" ("cpf" character varying NOT NULL, "nome" character varying NOT NULL, "idade" integer NOT NULL, "rg" character varying NOT NULL, "data_nasc" date NOT NULL, "sexo" character varying NOT NULL, "signo" character varying NOT NULL, "mae" character varying NOT NULL, "pai" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "cep" character varying NOT NULL, "endereco" character varying NOT NULL, "numero" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "telefone_fixo" character varying NOT NULL, "celular" character varying NOT NULL, "altura" character varying NOT NULL, "peso" integer NOT NULL, "tipo_sanguineo" character varying NOT NULL, "cor" character varying NOT NULL, CONSTRAINT "UQ_c75ca745cf2ef33d986e4e5e648" UNIQUE ("rg"), CONSTRAINT "UQ_7305cdc6186085e5abaefe643b4" UNIQUE ("email"), CONSTRAINT "PK_8eb9dba1cf8f89575da9a5cb6d4" PRIMARY KEY ("cpf"))`);
        await queryRunner.query(`ALTER TABLE "indices" ADD CONSTRAINT "FK_de8032818b76b83ae52ba4bd531" FOREIGN KEY ("cpf") REFERENCES "paciente"("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "indices" DROP CONSTRAINT "FK_de8032818b76b83ae52ba4bd531"`);
        await queryRunner.query(`DROP TABLE "paciente"`);
        await queryRunner.query(`DROP TABLE "indices"`);
        await queryRunner.query(`DROP TYPE "public"."indices_tipo_indice_enum"`);
    }

}
