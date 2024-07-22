import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js'
const app = express();

dotenv.config({path:'./config/config.env'}); 

// to connect backend from frontend 
app.use(cors({
    origin : [process.env.FRONTEND_URL], // passed the frontend url from environment variable 
    methods : ["POST"], // need to pass the methods name that we need to perform 
    credentials : true
}))

app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.use('/api/v1/reservation', reservationRouter);

dbConnection();

app.use(errorMiddleware)
export default app;