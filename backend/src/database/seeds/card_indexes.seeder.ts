import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Index } from '../../modules/indexes/entities/index.entity';

export default class CardIndexesSeeder implements Seeder {
  public async run(dataSource: DataSource) {
    const repository = dataSource.getRepository(Index);

    await repository.insert([]);
  }
}
