import React, { useState } from "react";
import "./Post.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Post = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [editorHtml, setEditorHtml] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <>
      <form className="postForm" onSubmit={handleSubmit}>
        <label>Posts</label>
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
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleEditorChange}
      />
    </>
  );
};

export default Post;
