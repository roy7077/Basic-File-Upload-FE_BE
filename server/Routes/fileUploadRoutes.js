const express=require('express');
const router=express.Router();
const {localFileUpload}=require('../Controllers/localFileUpload');
const {uploadToCloudinary}=require('../Controllers/uploadToCloudinary');
const {uploadViedoCloudinary}=require('../Controllers/uploadViedoToCloudinarry');
const {imageSizeReducer}=require('../Controllers/imageSizeReducer');

router.post('/fileUpload',localFileUpload);
router.post('/uploadToCloudinary',uploadToCloudinary);
router.post('/uploadViedoCloudinary',uploadViedoCloudinary);
router.post('/imageSizeReducer',imageSizeReducer);

module.exports=router;

