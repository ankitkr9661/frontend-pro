import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    // ✅ Use environment-based API URL (local + Render)
    const API_BASE_URL =
      import.meta.env.VITE_API_URL ||
      import.meta.env.VITE_LOCAL_API_URL ||
      "http://localhost:5000";

    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        setError("Session expired or unauthorized access.");
        localStorage.clear();
        setTimeout(() => navigate("/login"), 1500);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) {
    return (
      <div className="home-container fade-up">
        <div
          className="login-card p-4 rounded-4"
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            color: "white",
            backdropFilter: "blur(5px)",
          }}
        >
          <h4>{error}</h4>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="home-container fade-up">
        <div
          className="login-card p-4 rounded-4"
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            color: "white",
            backdropFilter: "blur(5px)",
          }}
        >
          <h4>Loading profile...</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container fade-up">
      <div
        className="profile-card shadow-lg"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(8px)",
          color: "white",
          padding: "30px",
          borderRadius: "20px",
          maxWidth: "450px",
          width: "100%",
        }}
      >
        <div className="profile-top mb-4 text-center">
          <div className="profile-avatar mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="User Avatar"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "3px solid white",
              }}
            />
          </div>
          <div className="profile-name">
            <h3 className="fw-bold">{user.name}</h3>
            <p className="fw-semibold text-light mb-0">
              {user.role ? user.role.toUpperCase() : "USER"}
            </p>
          </div>
        </div>

        <div className="profile-details text-start">
          <p>
            <strong>User ID:</strong> {user.userId}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Contact:</strong> {user.contactNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
