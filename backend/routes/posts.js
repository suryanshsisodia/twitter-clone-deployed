import express from "express";
import { getFeedPosts, getUserPosts, likePost , delUserPosts, getPost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.get("/:postId", verifyToken, delUserPosts);
router.get("/getPost/:postId", verifyToken, getPost);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;