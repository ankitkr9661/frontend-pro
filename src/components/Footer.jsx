// 📁 src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center py-3 mt-auto">
      <p className="mb-0">
        © {new Date().getFullYear()} MyUserProfile | Designed with ❤️ by Ankit
      </p>
    </footer>
  );
};

export default Footer;
