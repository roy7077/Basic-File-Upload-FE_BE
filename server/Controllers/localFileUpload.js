const File=require('../Models/fileSchema');

exports.localFileUpload=async (req,res)=>{
    try{
        const file=req.files.file;
        //console.log("file ",file);
        let path=__dirname+"/files/"+Date.now()+`.${file.name.split('.')[1]}`;
        
        file.mv(path,(err)=>{
            console.log(err);
        })

        return res.status(200).json({
            success: true,
            message: "Local file Uploaded SuccessFully",
        });
    }
    catch(error){
        console.log("Not able to Upload file on server");
        console.log(error);
    }
}