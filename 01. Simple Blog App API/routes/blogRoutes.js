import Blog from "../models/model.js";
import express from "express";

const router = express.Router();

//GET ALL BLOGS

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({
      message: "Didnt find the BLOGS",
    });
  }
});

//CREATE A NEW BLOG

router.post("/", async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newBlog = new Blog({ title, content, author });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({
      message: "ERROR , Blog not created",
    });
  }
});

export default router;
