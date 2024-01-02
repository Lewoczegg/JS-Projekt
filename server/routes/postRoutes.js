import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  createPost,
  getComments,
  getPost,
  getPosts,
  getUserPosts,
} from "../controllers/postController.js";

const router = express.Router();

// CREATE POST
router.post("/create-post", userAuth, createPost);

// GET POSTS
router.get("/", userAuth, getPosts);
router.get("/:id", userAuth, getPost);
router.get("/get-user-post/:id", userAuth, getUserPosts);

// GET COMMENTS
router.get("/comments/:postId", getComments);

export default router;
