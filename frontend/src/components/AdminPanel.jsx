import React, { useState } from 'react';
import GetAllTasks from './GetAllTasks';
import GetAllUsers from './GetAllUsers';
import './AdminPanel.css';

const AdminPanel = () => {
    const [selector, setSelector] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here, for example:
        if (email === 'admin@example.com' && password === 'admin123') {
            setLoggedIn(true);
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="admin-panel-container">
            {!loggedIn ? (
                <form onSubmit={handleLogin} className="login-form">
                    <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit" className="login-button">Login</button>
                </form>
            ) : (
                <>
                    <div className='flex justify-center'>
                        <button className={`border p-2 rounded m-3 ${selector === "task" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setSelector("task")}>Get All Tasks</button>
                        <button className={`border p-2 rounded m-3 ${selector === "user" ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setSelector("user")}>Get All Users</button>
                    </div>

                    <div>
                        {selector === "task" && <GetAllTasks />}
                        {selector === "user" && <GetAllUsers />}
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminPanel;
