import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Index, TipoIndice } from '../../modules/indexes/entities/index.entity';
import * as path from 'node:path';
import * as fs from 'node:fs';
import * as readline from 'node:readline';
import * as fsPromise from 'node:fs/promises';
import { parse } from 'date-fns';

const directoryPath = path.join(__dirname, '/../data/indice_cardiaco/');

export default class CardIndexesSeeder implements Seeder {
  public async run(dataSource: DataSource) {
    const repository = dataSource.getRepository(Index);

    const files = await fsPromise.readdir(directoryPath, {
      withFileTypes: true,
    });

    for (const file of files) {
      const fileStream = fs.createReadStream(
        path.join(directoryPath, file.name),
      );

      const dataDoIndice = parse(file.name, 'ddMMyyyy', new Date());

      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
      });

      let isFirstLine = true;

      for await (const line of rl) {
        const [cpf, epoch, ind_card] = line.split(' ');

        if (isFirstLine) {
          isFirstLine = false;
          continue;
        }

        await repository.insert({
          cpf,
          epoch: parseInt(epoch),
          indice: parseFloat(ind_card),
          data: dataDoIndice,
          tipo_indice: TipoIndice.CARDIACO,
        });
      }
    }
  }
}
