import express, {Request,Response} from "express";
const router = express.Router();
import productsSchema from "../models/productsSchema";
import categorySchema from "../models/category";


// router.route("/").post(async (req:Request, res:Response) => {
//     console.log(req.body,"string");
//     const data=await productsSchema.create(req.body);
//     console.log(data,"dtaaa");
//     return res.status(200).send(data);    

    
// });
router.route("/all").get(async (req:Request, res:Response)=>{
    const data=await productsSchema.find({});
    return res.status(200).send(data);
})
router.route("/category").get(async (req:Request, res:Response)=>{
    // console.log(res);
    const result=await categorySchema.find({});
  console.log(result);

    return res.status(200).send(result);
})

export default router;


