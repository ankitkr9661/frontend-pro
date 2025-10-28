// 📁 src/pages/Register.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contactNumber: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    // ✅ Use environment variables for dynamic base URL
    const API_BASE_URL =
      import.meta.env.VITE_API_URL ||
      import.meta.env.VITE_LOCAL_API_URL ||
      "http://localhost:5000"; // final fallback

    try {
      const res = await axios.post(`${API_BASE_URL}/api/users/register`, form);
      if (res.data.message) {
        setMessage("✅ User registered successfully!");
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (err) {
      setMessage("❌ Registration failed! Please try again.");
    }
  };

  return (
    <div className="home-container fade-up">
      <div className="auth-card shadow-lg p-4">
        <h2 className="text-center mb-4 fw-bold text-light">Register</h2>

        {message && <div className="alert-msg text-center mb-3">{message}</div>}

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label text-light">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Contact Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter contact number"
              value={form.contactNumber}
              onChange={(e) =>
                setForm({ ...form, contactNumber: e.target.value })
              }
              required
            />
          </div>

          <button className="btn btn-accent w-100 mt-3 fw-semibold" type="submit">
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-light">
          Already have an account?{" "}
          <Link to="/login" className="text-accent fw-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
