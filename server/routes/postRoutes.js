import express from "express";
import userAuth from "../middleware/authMiddleware.js";
import {
  commentPost,
  createPost,
  getComments,
  getPost,
  getPosts,
  getUserPosts,
  likePost,
  likePostComment,
  replyPostComment,
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

// LIKE AND COMMENT ON POSTS
router.post("/like/:id", userAuth, likePost);
router.post("/like-comment/:id/:rid?", userAuth, likePostComment);
router.post("/comment/:id", userAuth, commentPost);
router.post("/reply-comment/:id", userAuth, replyPostComment);

export default router;
