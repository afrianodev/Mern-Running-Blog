import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import userAuth from './routes/auth.route.js'

dotenv.config();

const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGO_STRING)
.then(() => {
    console.log(`MongoDB is connected`)
})
.catch((err) => {console.log(err)})

app.listen(3000, () => {
    console.log(`Server running on port 3000`)
})

app.use('/api/user', userRoutes)
app.use('/api/auth', userAuth)