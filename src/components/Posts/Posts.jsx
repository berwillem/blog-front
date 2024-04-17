import "./Posts.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="posts">
      {posts?.map((post) => (
        <div className="post">
          {" "}
          <Link to={`/post/${post._id}`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/src/assets/image.png"
                  alt="green iguana"
                />
                <CardContent>
                  {post.images.map((image) => (
                    <img key={image} src={image} alt="Post" />
                  ))}
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.text}
                  </Typography>
                  {post.likes}
                  <CiHeart
                    className="icon-heart"
                    onClick={() => handlelikepost(post._id)}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
