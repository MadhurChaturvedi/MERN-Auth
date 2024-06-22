import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
import userRoutes from './routes/userRoutes.js'
import { connectDB } from './DB/DB.js';
import cookieParser from 'cookie-parser';

import { notFound, errorHandle } from './middleware/errorMiddleware.js';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser())
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandle);

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
})