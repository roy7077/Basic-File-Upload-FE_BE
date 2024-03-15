const cloudinary = require("cloudinary").v2;
const fileSchema=require('../Models/fileSchema');

require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret:process.env.API_SECRET
});

function isSupported(supported,fileType){
    return supported.includes(fileType);
}


// function to upload files to cloudinary
async function uploadToCloudinary(file, folder) {
    try {
        const options = { folder };
        options.resource_type="auto";
        return await cloudinary.uploader.upload(file.tempFilePath, options);
    } catch (error) {
        // Handle the error appropriately, such as logging or throwing a custom error
        console.error("Error uploading to Cloudinary:", error);
        throw error;
    }
}


exports.uploadViedoCloudinary=async(req,res)=>{
    try{
        const {name,email,tags}=req.body;
        const file=req.files.viedoFile;

        if(!file)
        {
            return res.status(404).json({
                success:false,
                message:"File is not present"
            })
        }

        //console.log(file);
        const support=["mp4","mov"];
        const fileType=file.name.split('.')[1].toLowerCase();

        if(!isSupported(support,fileType))
        {
            return res.status(400).json({
                success:false,
                message:"Filetype is not supported"
            })
        }

        //uploading to cloudinary
        const response=await uploadToCloudinary(file,"imageCloud");
    
        //uploading to database
        const resp=await fileSchema.create({
            name,
            email,
            tags,
            imageUrl:response.secure_url
        })

        return res.status(200).json({
            success:true,
            message:"file uploaded successfully",
        })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"something went wrong while uploading file"
        })
    }
}