// /routes/blogRoutes.js
import express from 'express';
import { createBlog, getBlogs } from '../controllers/blogController.js';
import Blog from '../models/blogModel.js';

const router = express.Router();

// Route to get all blogs
router.get('/blogs', getBlogs);

// Route to get a single blog by ID
router.get('/blogs/:id', async (req, res) => {
    const { id } = req.params; // Get the ID from the URL params
    try {
      const blog = await Blog.findById(id); // Find the blog by ID
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
      res.json(blog); // Send the full blog data
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blog', error });
    }
  });

// Route to create a new blog
router.post('/create-blog', createBlog);

export default router;
