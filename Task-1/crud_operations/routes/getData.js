const express=require('express');
const router=express.Router();
const routes=require('../controllers/getAlldata');


router.get('/getdata',routes.getData);


module.exports=router