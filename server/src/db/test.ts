import { sequelize } from './config';

const connectionTest = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    return true;
  } catch (error) {
    console.error('Unable to connect to the database:', error);

    return false;
  }
};

export default connectionTest;
