import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  port: 3306,
  host: 'localhost',
  username: 'root',
  database: 'task-management',
  password: 'my_secret_password',
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['dist/migrations/**/*{.ts,.js}'],
  migrationsRun: true,
  synchronize: false,
  logging: true,
});
