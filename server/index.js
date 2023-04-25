import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan"
import cors from "cors"
import authRoutes from'./routes/auth.js';
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js"


dotenv.config();

const app = express();
// db connection
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster0.3ljghjd.mongodb.net/connect-work?retryWrites=true&w=majority');

mongoose.connection.on('open', () => console.log('MongoDB connected!'));

// middlewares
app.use(morgan("dev"))
app.use(express.json());
app.use(cors())
// router middleware
app.use('/api',authRoutes)
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);



const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Node Server is running ${port}`);
});
