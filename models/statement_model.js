import { Schema, model } from "mongoose";

// First way from the schema documentation
// const incidentTypes = ['criminal', 'non-criminal']; // Add your own types
// const civilianStatusTypes = ['suspect', 'complaint', 'witness']; // Add your own types
// const caseStatusTypes = ['opened','closed']; // Add your own types

// const statementSchema = new Schema({
//     statementId: {type:String},
//     incidentType: {
//         type: String,
//         enum: incidentTypes
//     },
//     civilianStatus: {type: String,
//         enum: civilianStatusTypes
//     },
//     statement:{type:String},
//     caseStatus:{type:String,
//         enum: caseStatusTypes
//     },
//     civilianId:{type:String},
//     createAt:{type:Date, default: Date.now()},
//     updatedAt:{type:Date, default: Date.now()}
// });

// What we did with Racheal
const statementSchema = new Schema({
    statementId: {type:String},
    incidentType: {enum: ['criminal', 'non-criminal']},
    civilianStatus: {enum: ['suspect', 'complaint', 'witness']},
    statement:{type:String},
    caseStatus:{enum:['opened','closed']},
    civilianId:{type:String},
    createAt:{type:Date, default: Date.now()},
    updatedAt:{type:Date, default: Date.now()}
});

export const StatementModel = model('statement', statementSchema);