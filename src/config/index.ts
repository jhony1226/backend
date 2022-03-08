import dotenv from 'dotenv';
import { http } from 'winston';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("Couldn't find .env file");
}

export default {
  
  port: process.env.PORT,
  
  api: {
    prefix: '/api',
  },
  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
};
