const express=require('express');
const router=express.Router();

const deleteInfo=require('../controllers/deleteData');


router.delete('/delete/:id',deleteInfo.deleteData)

module.exports=router