import axios from "axios";
import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handlsubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/register", {
        email,
        username: userName,
        password,
      })
      .then(console.log("test"))
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      <form onSubmit={(e) => handlsubmit(e)}>
        <input
          type="text"
          placeholder="enter your username"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="enteryour password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      <p>
        Already have an acount? Login now : <Link to="/Login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
