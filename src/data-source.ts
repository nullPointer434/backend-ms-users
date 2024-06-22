import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { UserModel } from './models/user.model';
import { CurrencyModel } from './models/currency.model';

dotenv.config();

export const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  // ssl: { rejectedUnauthorized: true },
  entities: [UserModel, CurrencyModel],
  logging: true,
  // synchronize: true
});