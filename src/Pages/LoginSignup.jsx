import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../CSS/LoginSignup.css';
import majestie from '../Components/Assets/majestie.jpg';

const LoginSignup = () => {
    const containerRef = useRef(null); // Create a ref for the container
    const navigate = useNavigate(); // Initialize useNavigate

    // State for login inputs
    const [loginUserName, setLoginUserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // State for registration inputs
    const [registerUserName, setRegisterUserName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToPrivacy, setAgreeToPrivacy] = useState(false); // New state for checkbox

    useEffect(() => {
        const registerBtn = document.querySelector('.register-btn');
        const loginBtn = document.querySelector('.login-btn');

        const handleRegisterClick = () => {
            containerRef.current.classList.add('active');
        };

        const handleLoginClick = () => {
            containerRef.current.classList.remove('active');
        };

        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);

        // Cleanup event listeners on unmount
        return () => {
            registerBtn.removeEventListener('click', handleRegisterClick);
            loginBtn.removeEventListener('click', handleLoginClick);
        };
    }, []); // Empty dependency array to run once on mount

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                username: loginUserName,
                password: loginPassword,
            });
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.token); // Store the token
            navigate('/home'); // Redirect to homepage after successful login
        } catch (error) {
            console.error('Error during login:', error.response?.data || error.message);
            // Handle error (e.g., show error message to user)
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (!agreeToPrivacy) {
            alert('You must agree to the privacy policy to register.');
            return;
        }

        if (registerPassword !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/signup', {
                username: registerUserName,
                email: registerEmail,
                password: registerPassword,
            });
            console.log('Registration successful:', response.data);
            localStorage.setItem('token', response.data.token); // Store the token
            navigate('/home'); // Redirect to homepage after successful registration
        } catch (error) {
            console.error('Error during registration:', error.response?.data || error.message);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <div className="container" ref={containerRef}>
            <div className="form-box login">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            value={loginUserName}
                            onChange={(e) => setLoginUserName(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <div className="forgot-link">
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    <p>or Login with social platforms</p>
                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-google"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </form>
            </div>
            <div className="form-box register">
                <form onSubmit={handleRegisterSubmit}>
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            value={registerUserName}
                            onChange={(e) => setRegisterUserName(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <i className="fa-solid fa-lock"></i>
                    </div>
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="privacyPolicy"
                            checked={agreeToPrivacy}
                            onChange={() => setAgreeToPrivacy(!agreeToPrivacy)}
                        />
                        <label htmlFor="privacyPolicy">
                            I agree to the terms, condition <a href="#">privacy policy</a>.
                        </label>
                    </div>
                    <button type="submit" className="btn">Register</button>
                    <p>or register with social platforms</p>
                    <div className="social-icons">
                        <a href="#"><i className="fa-brands fa-google"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </form>
            </div>
            <div className="toggle-box">
                <div className="toggle-panel toggle-left">
                    <h1>Hello, Welcome!</h1>
                    <p>Don't have an account?</p>
                    <button className="btn register-btn">Register</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Welcome Back</h1>
                    <p>Already have an account?</p>
                    <button className="btn login-btn">Login</button>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;