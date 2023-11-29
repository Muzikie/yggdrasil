import { Gender, Emotion } from './models';
const isDev = process.env.NODE_ENV === 'development';

const dbInit = () => {
  Gender.sync({ alter: isDev });
  Emotion.sync({ alter: isDev });
};

export default dbInit;
