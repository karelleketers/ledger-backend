import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config } from 'dotenv';
config();

const ormconfig: PostgresConnectionOptions = {
  type: 'postgres',
  port: 5432,
  database: 'fulldb_ntov',
  host: 'localhost',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  factories: ['dist/src/db/factories/**/*.js'],
  seeds: ['dist/src/db/seeds/**/*.js'],
};

export default ormconfig;
