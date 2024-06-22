import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/user.route';
import currencyRoutes from './routes/currency.route';

dotenv.config();

const app = express();

app.set('port', process.env.PORT);

// middlewares
app.use(cors());
app.use(morgan(process.env.ENVIRONMENT!));
app.use(express.json());

// routes
app.use(userRoutes);
app.use(currencyRoutes);

export default app;