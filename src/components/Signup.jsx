import { useState } from 'react';
import './Signup.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';  // Importing the icons from react-icons
import SmallHero from './SmallHero';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);  
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log('Signing up with:', { email, password });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);  
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);  
  };

  return (
    <>
      <SmallHero />
      <div className="signup-container">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p className="subtitle">Please fill in the details below to create an account.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={passwordVisible ? 'text' : 'password'} 
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}  
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="password-container">
                <input
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="eye-icon"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}  
                </button>
              </div>
            </div>

            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          
          <div className="login-link">
            Already have an account? <a href="/login">Log in</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
