const express=require('express');
const router=express.Router();
const routes=require('../controllers/addData')
router.post('/addData',routes.addData);
module.exports=router