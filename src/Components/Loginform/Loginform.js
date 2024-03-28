import React from "react";
import "./Loginform.css";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8060/user/login", {
        username,
        password,
      });
      console.log(response.data);
      navigate("/home")
      // Handle successful login
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
  };

  return (
    <div className="body">
    <div className="wrapper_login">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box_login">
          <input
            className="input_field"
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUserAlt className="icon" />
        </div>
        <div className="input-box_login">
          <input
            className="input_field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <RiLockPasswordFill className="icon" />
        </div>
        <div className="remember-forget_login">
          <label>
            <input type="checkbox"></input>Remember me
          </label>
            <a href="http://localhost:3000/reg">Forgot Password?</a>

        </div>

        <button type="submit">Login</button>

        <div className="register-link_login">
          <p>
            Don't have an account?<a href="http://localhost:3000/reg">Register</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
