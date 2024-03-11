const express=require('express');
const router=express.Router();
const {localFileUpload}=require('../Controllers/localFileUpload');

router.post('/fileUpload',localFileUpload);

module.exports=router;

