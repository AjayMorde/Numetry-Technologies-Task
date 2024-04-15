const express=require('express');
const router=express.Router();
const routes=require('../controllers/frontendPages');
router.get('',routes.getStudnetsPage)
router.get('/getStudentsInfo',routes.getStudentsInfo)
// router.get('',routes.geterrorPage);
module.exports=router