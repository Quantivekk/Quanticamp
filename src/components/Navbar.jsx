import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for routing
import "./Navbar.css";
import logo_light from "../assets/logo-white.png";
import logo_dark from "../assets/logo-black.png";
import search_icon_dark from "../assets/search-b.png";
import search_icon_light from "../assets/search-w.png";
import toggle_light from "../assets/day.png";
import toggle_dark from "../assets/night.png";
import close_icon from "../assets/cross.png";
import menu_icon from "../assets/menu-burger.png";
import close_icon_light from "../assets/cross-white.png";
import menu_icon_light from "../assets/menu-burger-white.png";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <img
        src={theme === "light" ? logo_dark : logo_light}
        alt="Logo"
        className="logo"
      />

        {/* Mobile Menu Icon */}
        <img
          src={menuOpen 
            ? (theme === "light" ? close_icon : close_icon_light)
            : (theme === "light" ? menu_icon : menu_icon_light)
          }
          alt="menu"
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />

      {/* Nav Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
        <li>
          <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
        </li>
      </ul>

        {/* Search box */}
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img
            src={theme === "light" ? search_icon_light : search_icon_dark}
            alt="search"
          />
        </div>

      {/* Theme toggle */}
      <img
        onClick={toggle_mode}
        src={theme === "light" ? toggle_dark : toggle_light}
        alt="toggle theme"
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
