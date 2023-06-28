import express from 'express';
import { createNewUser, login, pong } from './handlers/user';
import { protect } from './modules/auth';
//import morgan from 'morgan'
import cors from 'cors';
import router from './router';
import { createContractor } from './handlers/contractors';

const app = express();

//app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/test', createContractor);

app.use('/ping', pong);

app.use('/api', protect, router);

app.post('/admin', createContractor);

app.post('/login', login);

export default app;
