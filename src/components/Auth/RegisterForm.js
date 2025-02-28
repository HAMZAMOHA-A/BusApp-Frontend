import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import authApi from "../../api/authApi"; // Assuming this is the path to your authApi
import "./Auth.css";

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "Customer" // Default role (you can change it as needed)
    });

    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authApi.register(formData);
            setMessage(response.message);

            // Redirect to login after successful registration
            setTimeout(() => navigate("/login"), 2000); // Redirect after showing message
        } catch (error) {
            setMessage(error.response?.data?.error || "Registration failed.");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Register</h2>
                {message && <p className="auth-message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
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
                    <select name="role" value={formData.role} onChange={handleChange} required>
                        <option value="Customer">Customer</option>
                        <option value="Driver">Driver</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <button type="submit" className="auth-btn">Register</button>
                </form>
                <p className="auth-switch">
                    Already have an account? <span onClick={() => navigate("/login")}>Login</span>
                </p>
            </div>
        </div>
    );
}

export default RegisterForm;
