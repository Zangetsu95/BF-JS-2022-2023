import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'amine',
  password: 'root',
  database: 'SPA',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
