const express=require('express');
const router=express.Router();
const {localFileUpload}=require('../Controllers/localFileUpload');
const {uploadToCloudinary}=require('../Controllers/uploadToCloudinary');

router.post('/fileUpload',localFileUpload);
router.post('/uploadToCloudinary',uploadToCloudinary);

module.exports=router;

