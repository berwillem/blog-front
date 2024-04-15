import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handlsubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/login", { email, password })
      .then((res) => console.log(res.data))
      .catch((err) => setError(err.response.data));
  };
  return (
    <div className="container-login">
      <form onSubmit={(e) => handlsubmit(e)}>
        <h1>Login</h1>
        <div className="input-container">
          <input
            type="email"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            className="input-container"
            type="password"
            placeholder="enteryour password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          login
        </button>
      </form>
      <div className="error">{error}</div>

      <p>
        not Registred yet? register now : <Link to="/Register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
