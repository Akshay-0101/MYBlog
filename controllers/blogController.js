// /controllers/blogController.js
import Blog from '../models/blogModel.js';

// Create a new blog post
export const createBlog = async (req, res) => {
  const { title, author, content } = req.body;

  try {
    const newBlog = new Blog({ title, author, content });
    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', newBlog });
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

// Get all blog posts
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};
