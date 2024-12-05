import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import dbConnect from "./utils/db.js";
import blogRoutes from "./routes/blogRoutes.js";
dotenv.config();

//App Setup

const app = express();

//middleware

app.use(cors());
app.use(bodyParser.json());

//Database

dbConnect;

//Routes

app.use("/api/blogs", blogRoutes);

//PORT and SERVER

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
