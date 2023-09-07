import express, {Request,Response} from "express";
const categoryrouter = express.Router();

import categorySchema from "../models/category";



//Find all categories
categoryrouter.route("/categories").get(async (req:Request, res:Response)=>{
    const result=await categorySchema.find({});
    return res.status(200).send(result);
})


export default categoryrouter;