const mongoose=require('mongoose');
const nodemailer = require("nodemailer");
const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
})

fileSchema.post("save",async function(doc){
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
          });

          const info = await transporter.sendMail({
            from: 'Sagar ray', // sender address
            to: doc.email, // list of receivers
            subject: "File Uploaded Successfully", // Subject line
            text: "Your file uploaded successfully", // plain text body
            html: ` <body>
                    <p>Your file has been uploaded successfully.</p>
                    <p>View your file <a href="${doc.imageUrl}">here</a>.</p>
                    </body>`
          });
        
          console.log(info);
    }
    catch(error){
        console.log(error);
    }
})

const File=mongoose.model("File",fileSchema);
module.exports=File;