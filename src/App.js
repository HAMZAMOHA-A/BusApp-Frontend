import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "./components/Auth/RegisterForm";
import LoginForm from "./components/Auth/LoginForm";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import DriverDashboard from "./components/Dashboards/DriverDashboard";
import CustomerDashboard from "./components/Dashboards/CustomerDashboard";
import PrivateRoute from "./components/PrivateRoute"; // Ensure this component exists
import HomePage from "./pages/Homepage";
import Navbar from "./Navbar";
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
            <Route path="/about" element={<AboutUs />} />
                {/* Homepage route */}
                <Route path="/" element={<HomePage />} />

                {/* Login route */}
                <Route path="/login" element={<LoginForm />} />

                {/* Register route */}
                <Route path="/register" element={<RegisterForm />} />

                {/* Role-based protected routes */}
                <Route path="/admin-dashboard" element={
                    <PrivateRoute allowedRoles={["Admin"]}>
                        <AdminDashboard />
                    </PrivateRoute>
                } />
                <Route path="/driver-dashboard" element={
                    <PrivateRoute allowedRoles={["Driver"]}>
                        <DriverDashboard />
                    </PrivateRoute>
                } />
                <Route path="/customer-dashboard" element={
                    <PrivateRoute allowedRoles={["Customer"]}>
                        <CustomerDashboard />
                    </PrivateRoute>
                } />

                {/* Catch-all for invalid routes */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
