import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;
import userRoute from './routes/userRoute.js';

mongoose.connect(MONGOURL).then(() => {
    console.log('MongoDB connected successfully!');
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })


}).catch((error)=>{
    console.error('MongoDB connection error:', error);
})

app.use('/api/user', userRoute);
