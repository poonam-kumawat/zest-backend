const {mongoose, Schema, createConnection } = require("mongoose");
// import mongoose, { ObjectId } from 'mongoose';


const arr=["https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F15%2FMiniPeppers.jpg&q=75&w=3840","https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F19%2Fstrawberry.jpg&q=75&w=3840",
"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F20%2FVeggiePlatter.jpg&q=75&w=3840",
"https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&q=75&w=3840","https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F14%2FMangoes.jpg&q=75&w=3840"]


const conn1 = createConnection(
  "mongodb+srv://poonam:sparky23@cluster0.i5wqvfd.mongodb.net/zestEcommerce"
);


const categorySchema = new Schema({

  categories: { type: String, required: true },

});
const category = conn1.model("category", categorySchema);

const categoryImg = async ()=>{
  try{

    const data=await category.find({}); 
    // console.log(data); 
    return Promise.all(
  
//        data.forEach((cat, i) => {
//     category.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(cat._id) }, arr[i]);
// })
    )
//    data.forEach((cat, i) => {
//     category.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(cat._id) }, arr[i]);
// });

  }catch(e){
    console.log('error', e);
  }
  
}

categoryImg();





