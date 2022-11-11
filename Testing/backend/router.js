import express from 'express';
import data from "./data.js";

const router=express.Router();
router.get('/',async(req,res)=>{
   await res.send(data);
   
 });

 export default router