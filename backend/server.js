import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import ConnectDB from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';
dotenv.config();

ConnectDB();

const app = express();

app.use(express.json());

app.use(morgan('dev'));
app.use(cors());
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Application is running in ${process.env.NODE_MODE} mode on port ${port}.`
  );
});
