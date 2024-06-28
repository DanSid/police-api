import express from "express";
// import statementRoute from './routes/statement-route.js'
import { router } from "./routes/statement-route.js";
import 'dotenv/config';
// import mongoose from "mongoose";
import { dbConnection } from "./config/db.js";





const app = express()
app.use(express.json())


dbConnection();


app.get('/', (req, res) => 
    res.json('All your Statement information is here!')
);
app.post('/routes', (req, res) => 
    res.json('Your statement is given!')
);

// app.use(statementRoute);
app.use(router);
 

// const mongoConnection = process.env.Mongo_url;
// mongoose.connect(mongoConnection)
//   .then(() => console.log("Database is connected"));


app.listen(4500, () => 
    console.log(`App is Running!`

    ))

