import Post from "../models/Post.js";
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

export const createPost = [
  auth,
  async (req, res) => {
    try {
      const post = new Post({ user: req.user, content: req.body.content });
      await post.save();
      res.status(201).json(post);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  }
];

export const getFeed = [
  auth,
  async (req, res) => {
    try {
      const posts = await Post.find().populate("user", "username").sort({ createdAt: -1 });
      res.json(posts);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  }
];
