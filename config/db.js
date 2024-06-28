import mongoose from "mongoose";

import 'dotenv/config';

const mongoConnection = process.env.Mongo_url;

// Adding the export makes it easy to import it to the index.js
  export const dbConnection = () =>{
    mongoose.connect(mongoConnection)
    .then(() => console.log("Database is connected"));
  } 