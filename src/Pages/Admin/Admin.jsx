import { useState } from "react";
import "./Admin.css";
import SideMenuAdmin from "../../components/SideMenuAdmin/SideMenuAdmin";
import axios from "axios";

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  return (
    <div className="Admin-container">
      <SideMenuAdmin></SideMenuAdmin>
      <form onSubmit={handleSubmit}>
        <h1>Admin</h1>
        <div className="formulaire">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="formulaire">
          <label className="paswrd" htmlFor="password">
            Password:
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className="showpass"
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={handleShowPassword}
          />

          <label htmlFor="showPassword">Show Password</label>
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Admin;
