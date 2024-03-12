const express=require('express');
const {dbConnect}=require('./Config/databases');
const fileUploadRoutes=require('./Routes/fileUploadRoutes');

const app=express();

require('dotenv').config();

const fileUpload=require('express-fileupload');
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use(express.json());

const PORT=process.env.PORT || 6000;

app.use('/api/v1',fileUploadRoutes);

app.get('/',(req,res)=>{
    return res.send(`<h1> Welcome to home page </h1>`);
})

app.listen(PORT,()=>{
    console.log(`APP is running on PORT ${PORT}`);
})

dbConnect();