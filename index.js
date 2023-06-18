import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/postRouter";


dotenv.config();
const app = express();
const PORT = 9090;
const DB_URL = process.env.DB_URL;
app.use(express.json());
app.use('/api', router)

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log("OK");
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
