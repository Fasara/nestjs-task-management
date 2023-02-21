import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  port: 3306,
  host: 'localhost',
  username: 'root',
  database: 'task-management',
  password: 'my_secret_password',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/**/*{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrationsRun: true,
});
