import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

const dbName = process.env.DB_NAME as string || 'recipes_service';
const dbUser = process.env.DB_USER as string || 'recipe_db_user';
const dbHost = process.env.DB_HOST || 'projectdb';
const dbDriver = process.env.DB_DRIVER as Dialect || 'mysql';
const dbPassword = process.env.DB_PASSWORD || 'hellofresh';
const dbPort = process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306;

export const sequelize = new Sequelize({
  dialect: dbDriver,
  host: dbHost,
  port: dbPort,
  username: dbUser,
  password: dbPassword,
  database: dbName,
});
