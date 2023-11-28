import { Sequelize } from 'sequelize-typescript';

declare global {
  namespace Express {
    interface Request {
      sequelize: Sequelize;
    }
  }
}
