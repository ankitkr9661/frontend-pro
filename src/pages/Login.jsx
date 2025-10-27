import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMessage("✅ Login successful!");
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      setMessage("❌ Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="home-container fade-up">
      <div className="auth-card shadow-lg p-4">
        <h2 className="text-center mb-4 fw-bold text-light">Login</h2>

        {message && <div className="alert-msg text-center mb-3">{message}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-light">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-accent w-100 mt-3 fw-semibold" type="submit">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-light">
          Don’t have an account?{" "}
          <Link to="/register" className="text-accent fw-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
