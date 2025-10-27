import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  // 🎨 Dynamic background (changes on every reload)
  useEffect(() => {
    const wallpapers = [
  
      "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1920&q=80')",
      
    ];

    const randomWallpaper =
      wallpapers[Math.floor(Math.random() * wallpapers.length)];
    document.documentElement.style.setProperty("--dynamic-bg", randomWallpaper);
  }, []);

  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 mt-5 pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
