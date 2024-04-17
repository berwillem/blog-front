import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostsPage = () => {
  const { postid } = useParams();
  const [post, setPost] = useState({});
  const [error, seterror] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${postid}`)
      .then((res) => setPost(res.data))
      .catch((err) => seterror(err.message));
  }, []);
  console.log(post.title);
  return (
    <div>
      <h2> {post.title}</h2>
      <p>{post.text}</p>
      <p>{post.likes}</p>
    </div>
  );
};

export default PostsPage;
