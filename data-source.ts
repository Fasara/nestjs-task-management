import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  port: 3306,
  host: 'localhost',
  username: 'root',
  database: 'task-management',
  password: 'my_secret_password',
  entities: [__dirname + '/entities/**/*.entity{.ts,.js}'],
  migrations: [__dirname + 'src/migrations/**/*{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrationsRun: false,
});
