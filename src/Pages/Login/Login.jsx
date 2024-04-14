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
  };
  return (
    <div className="container">
      <form onSubmit={(e) => handlsubmit(e)}>
        <h1>Login</h1>
        <div className="input-container">
        <input 
          type="email"
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        /></div>
        <div className="input-container">
        <input className="input-container"
          type="password"
          placeholder="enteryour password"
          onChange={(e) => setPassword(e.target.value)}
        /></div>
    
        <button className="btn" type="submit">login</button>
      </form>
      <p>
        not Registred yet? register now : <Link to="/Register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
