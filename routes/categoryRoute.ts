import express, {Request,Response} from "express";
const categoryRouter = express.Router();

import categorySchema from "../models/category";



//Find all categories
categoryRouter.route("/").get(async (req:Request, res:Response)=>{
    const result=await categorySchema.find({});
    return res.status(200).send(result);
})


export default categoryRouter;