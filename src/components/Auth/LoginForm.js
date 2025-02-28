import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import "./Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null); // State for errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset errors before making request

    try {
      const response = await fetch("https://busbookingtest.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        
        // Store token and role in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Navigate to the appropriate dashboard based on the role
        switch (data.role) {
          case "Admin":
            navigate("/admin-dashboard");
            break;
          case "Driver":
            navigate("/driver-dashboard");
            break;
          case "Customer":
            navigate("/customer-dashboard");
            break;
          default:
            setError("Unknown role, please contact support.");
        }
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password input with eye icon */}
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="auth-btn">Login</button>
        </form>
        <p className="auth-switch">
          Don't have an account? <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
