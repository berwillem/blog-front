import axios from "axios";
import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlsubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  
  axios
  .post("http://localhost:5000/admin/login", {
    email,
    password,
  })
  .then(console.log("test"))
  .catch((err) => alert(err.message));
};
  return (
    <div>
      <form onSubmit={(e) => handlsubmit(e)}>
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
        not Registred yet? register now : <Link to="/Register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
