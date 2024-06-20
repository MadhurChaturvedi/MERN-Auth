import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect(process.env.DB_URL, { dbName: "MERN-Auth" })
        .then(() => console.log(`Database connected!!`))
        .catch((err) => console.log('error', err))
}

export { connectDB }