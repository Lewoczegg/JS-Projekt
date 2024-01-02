import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import { createPost, getPosts } from "../controllers/postController.js";

const router = express.Router();

// CREATE POST
router.post("/create-post", userAuth, createPost);

// get posts
router.post("/", userAuth, getPosts);

export default router;
