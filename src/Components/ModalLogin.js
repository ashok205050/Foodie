import React, { useState } from 'react';
import './ModalLogin.css';

export default function Login({ onClose }) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // State to toggle forms

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true);
  };

  const handleLoginClick = () => {
    setIsCreatingAccount(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Close modal when overlay is clicked */}
      <div className="modal-content" onClick={e => e.stopPropagation()}> {/* Prevent click from closing modal */}
        <span className="close-button" onClick={onClose}>&times;</span>
        {isCreatingAccount ? ( // Conditional rendering
          <CreateAccount onSwitchToLogin={handleLoginClick} />
        ) : (
          <LoginForm onSwitchToCreateAccount={handleCreateAccountClick} />
        )}
      </div>
    </div>
  );
}

const LoginForm = ({ onSwitchToCreateAccount }) => (
  <>
    <h2>Login</h2>
    <div className="phone-input">
      <span>flag +91</span>
      <input type="tel" placeholder="Phone" />
    </div>
    <button className="otp-button">Send One Time Password</button>
    <div className="alternative">or</div>
    <div className="create-account" onClick={onSwitchToCreateAccount}>
      New to Foodie? <span style={{ cursor: 'pointer', color: '#f39c12' }}>Create account</span>
    </div>
  </>
);

const CreateAccount = ({ onSwitchToLogin }) => {
  return (
    <>
      <h2>Create Account</h2>
      <div className="name-input">
        <input type="text" placeholder="Full Name" />
      </div>
      <div className="phone-input">
        <span>flag +91</span>
        <input type="tel" placeholder="Phone" />
      </div>
      <div className="email-input">
        <input type="email" placeholder="Email" />
      </div>
      <div className="terms">
        <input type="checkbox" id="terms" required />
        <label htmlFor="terms">
          I agree to Zomato's <a href="#">Terms of Service</a>, <a href="#">Privacy Policy</a>, and <a href="#">Content Policies</a>
        </label>
      </div>
      <button className="otp-button">Create account</button>
      <div className="alternative">or</div>
      <div className="create-account" onClick={onSwitchToLogin}>
        Already have an account? <span style={{ cursor: 'pointer', color: '#f39c12' }}>Log in</span>
      </div>
    </>
  );
};
