import { Patient } from 'src/modules/patient/entities/patient.entity';
import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

export default class PatientsSeeder implements Seeder {
  public async run(dataSource: DataSource) {
    const repository = dataSource.getRepository(Patient);

    await repository.insert([]);
  }
}
