// 📁 src/components/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="app-header bg-dark text-white shadow-sm">
      <h2
        className="fw-bold app-logo"
        style={{ letterSpacing: "1px", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        MyStream
      </h2>

      <nav>
        {!token ? (
          <>
           <Link to="/login" className="btn btn-login mx-2">
  Login
</Link>
<Link to="/register" className="btn btn-register mx-2">
  Register
</Link>


          </>
        ) : (
          <>
            <Link to="/profile" className="btn btn-outline-light mx-2">
              Profile
            </Link>
            <button onClick={handleLogout} className="btn btn-danger mx-2">
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
