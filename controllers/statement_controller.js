import { StatementModel } from "../models/statement_model.js";

//this WOULD BE WHERE THE ROUTES AND LOGIC OF THE CODE WILL BE

// To add or post data in the database
export const addStatement = async(req,res) =>{
// console.log('request', req.body);
// const addData = await StatementModel.create(req.body)
// res.json("statement added", addData)

try {
    console.log('request', req.body);
const addData = await StatementModel.create(req.body)
res.status(200).send(addData)
} catch (error) {
    console.log(error);
}


}

// To find all the statements
export const getStatement = async(req,res) =>{

try {
    console.log('Geting data', req.body);
const getData = await StatementModel.find()
res.status(200).send(getData)
} catch (error) {
    console.log(error);
}


}

// To get/find a specific statements through an ID
export const getSpecificStatement = async (req,res) =>{

try {
    console.log('Geting specific data', req.body);
const getSpecData = await StatementModel.findById(req.params.id)
res.status(200).send(getSpecData)
} catch (error) {
    console.log(error);
}
}

// To update a specific statements and update the Case Status field or a particular field
export const updateStatement = async(req,res) =>{

try {
    // console.log('Updating a particular data', req.body);
    // To route to get the closed route of the specific id
     // const status = req.params.caseStatus
    // So in the statement-route.js router.patch('/statement/:id/:caseStatus', updateStatement);
    const status = req.body.caseStatus
    console.log("request",status)
const updateSpeci = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus:status})
res.status(200).send(updateSpeci)
} catch (error) {
    console.log(error);
}
}

// To delete a specific statements and delete the particular ID
export const deleteStatement = async(req,res) =>{

try {
    // console.log('Updating a particular data', req.body);
    // To route to get the closed route of the specific id
     // const status = req.params.caseStatus
    // So in the statement-route.js router.patch('/statement/:id/:caseStatus', updateStatement);
    // const status = req.body.caseStatus
    // console.log("request",status)
const updateSpeci = await StatementModel.findByIdAndDelete(req.params.id)
res.status(200).send(`Statement with ID number ${req.params.id} has been deleted`)
// res.json(`Statement has been deleted ${req.params.body}`)
} catch (error) {
    console.log(error);
}
}