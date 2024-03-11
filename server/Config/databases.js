const mongoose=require('mongoose');
require('dotenv').config();

exports.dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((error)=>{
        console.log("Error while connecting database");
    })
}
