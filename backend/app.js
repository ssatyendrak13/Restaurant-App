import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from "./Database/dbConnection.js";
import { errorMiddleware } from "./Errors/error.js";
import reservationRouter from "./routes/reservationRoutes.js";

const app = express();
dotenv.config({path : "./config/config.env"}); // specify path of config.env file 

// to connect backed with frotend 
app.use(cors({ // app.use specify that the cors will be used as a middleware 
    origin : [process.env.FRONTEND_URI], // need to specify the path of frontend 
    methods : ["POST"], // need to specify the method that we need to perform 
    credentials :true
}));

app.use(express.json()); // it will convert the json string(that we will provide) to json object 
app.use(express.urlencoded({extended : true})); 
app.use("/api/v1/reservation", reservationRouter);


dbConnection();
 

app.use(errorMiddleware); // always use at last 
export default app;