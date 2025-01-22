import 'dotenv/config';
// import axios from 'axios';
import express from 'express';
import cors from 'cors';
import './config/dbConfig.js';
import routes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
// app.use(routes);

app.listen(process.env.PORT);

