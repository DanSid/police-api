import { Router } from "express";
// import { StatementModel } from "../models/statement_model.js";
import { addStatement,getStatement, updateStatement,getSpecificStatement, deleteStatement } from "../controllers/statement_controller.js";



export const router = Router();

router.post('/statement', addStatement);

router.get('/statement', getStatement);

router.get('/statement/:id', getSpecificStatement);

router.patch('/statement/:id', updateStatement);

router.delete('/statement/:id', deleteStatement);
// const statementRoute = Router();

// statementRoute.get('/civilians', (req, res)=>{
//     res.json('This is the Civilian page')
// })

// statementRoute.post('/civilians', (req, res)=>{
//     res.json('Civilian page successful')
// })

// Seting Up Module in for the Schema here

// statementRoute.post('/statement', async(req, res)=>{
//       await StatementModel.create(req.body)
//       res.json('Statement Added')
// })

// export default statementRoute;