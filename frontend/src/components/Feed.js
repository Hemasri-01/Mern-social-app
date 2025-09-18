import React, { useState, useEffect } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState("");

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      setPosts(res.data);
    } catch (err) {
      setMsg("Failed to load posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/posts`,
        { content },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      setContent("");
      fetchPosts();
    } catch (err) {
      setMsg("Failed to post");
    }
  };

  return (
    <div>
      <h2>Feed</h2>
      <form onSubmit={handlePost}>
        <input
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        />
        <button type="submit">Post</button>
      </form>
      {msg && <p>{msg}</p>}
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <b>{post.user?.username || "Anon"}:</b> {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feed;