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
//Find all products
router.route("/all").get(async (req:Request, res:Response)=>{
    const data=await productsSchema.find({});
    return res.status(200).send(data);
})
//Find all categories
router.route("/category").get(async (req:Request, res:Response)=>{
    const result=await categorySchema.find({});
    return res.status(200).send(result);
})

//Product filter api
router.route('/find').post(async (req : Request ,res : Response )=>{
  const filter=req.body;
  const data=await productsSchema.find(filter);
  return res.status(200).send(data);
});





export default router;


