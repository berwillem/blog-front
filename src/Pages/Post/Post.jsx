import { useState } from "react";
import "./Post.css"
const Post = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const handdleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  const handleChange = (e) => {
    setNewComment(e.target.value);
  };
  return (
    <>
      <form className="postForm" onSubmit={handdleSubmit} >
        <label>
          Posts
          
        </label>
        <textarea
            name="posts"
            cols="30"
            rows="10"
            value={newComment}
            onChange={handleChange}
          />
        <button type="submit">Add New Post</button>
      </form>
      <ul className="postList">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </>
  );
};

export default Post;
