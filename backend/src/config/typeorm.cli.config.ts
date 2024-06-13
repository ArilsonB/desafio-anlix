import { ConfigModule } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import typeormConfig from './typeorm.config';

ConfigModule.forRoot({
  isGlobal: true,
  load: [typeormConfig],
});

const options = {
  ...typeormConfig(),
  migrationsTableName: 'migracoes',
  migrations: [`${__dirname}/../database/migrations/**/*.{js,ts}`],
  seeds: [`${__dirname}/../database/seeds/**/*.seeder.{ts,js}`],
  factories: [`${__dirname}/../database/factories/**/*.factory.{ts,js}`],
  migrationsRun: false,
} as DataSourceOptions & SeederOptions;

const dataSource: DataSource = new DataSource(options);

export default dataSource;
