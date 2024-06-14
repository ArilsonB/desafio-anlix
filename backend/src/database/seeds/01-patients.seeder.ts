import { join } from 'node:path';
import { Patient } from '../../modules/patient/entities/patient.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { readFile } from 'fs/promises';
import { parse } from 'date-fns';

const filePath = join(__dirname, '/../data/pacientes.json');

export default class PatientsSeeder implements Seeder {
  public async run(dataSource: DataSource) {
    const repository = dataSource.getRepository(Patient);

    const data = await readFile(filePath, 'utf8');

    const pacientes = JSON.parse(data);

    for await (const paciente of pacientes) {
      await repository.insert({
        ...paciente,
        data_nasc: parse(paciente.data_nasc, 'dd/MM/yyyy', new Date()),
      });
    }
  }
}
