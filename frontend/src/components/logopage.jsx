import React from 'react';
import { Link } from 'react-router-dom';
import './logopage.css';
import logo from '../assets/logo.png';

function LogoPage() {
    return (
        <div className="logo-page-container">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="button-container">
                <Link to="/admin" className="admin-button">Admin</Link>
                <Link to="/login" className="student-button">Student</Link>
            </div>
        </div>
    );
}

export default LogoPage;
