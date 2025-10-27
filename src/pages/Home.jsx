// 📁 src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container text-center text-white fade-up">
      <div className="home-card shadow-lg p-5 rounded-4 bg-dark bg-opacity-75">
        <h1 className="mb-3 fw-bold">
          Welcome to <span className="text-info">MyUserDetails</span>
        </h1>
        <p className="text-light mb-4">
          Check your profile details.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/login" className="btn btn-info text-white px-4">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-light px-4">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
