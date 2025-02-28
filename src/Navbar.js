import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo"><Link to="/">Bus Booking</Link></h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          

          {/* Dashboard Dropdown */}
          <li className="dropdown">
            <button className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Dashboard ▾
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/driver">Driver</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/login" className="btn login-btn">Login</Link></li>
          <li><Link to="/register" className="btn register-btn">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
