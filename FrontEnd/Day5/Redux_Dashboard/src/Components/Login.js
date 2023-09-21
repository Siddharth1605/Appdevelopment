import React, { useState } from 'react';
import validator from 'validator';
import './Login.css'; // Import custom CSS
import { Link } from 'react-router-dom';
import Doctor from "../Assets/doctor_login.jpg";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!validator.isEmail(email)) {
      setIsFormValid(false);
      setEmailError('Invalid email address');
      return;
    } else {
      setEmailError('');
    }

    if (validator.isEmpty(password)) {
      setIsFormValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setIsFormValid(false);
      return;
    }

    // If validation passes, continue with the login process
    setIsLoginSuccessful(true);

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsFormValid(true);
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">

            {isLoginSuccessful ? (
              <div className="alert alert-success" role="alert">
                <strong className="font-bold">Logged in - Success!</strong>
                <button
                  type="button"
                  className="close"
                  onClick={() => setIsLoginSuccessful(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : (
              <main>
              
              <div className="card login-card" style={{ backgroundColor: '#B6EADA', color: '#1d2634' }}>
              
                <div className="card-body text-center mb-4 ">
                  <div className="row">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6">
                      <h2 className="card-title text-center mb-4">
                        Sign in to your account
                      </h2>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            style={{ marginLeft: 50, borderRadius: 20 }}
                            onChange={handleEmailChange}
                            placeholder='email'
                            className={`form-control ${
                              !isFormValid || emailError ? 'is-invalid' : ''
                            }`}
                          />
                          {emailError && (
                            <div className="invalid-feedback">{emailError}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <div className="d-flex justify-content-between">
                            <label htmlFor="password">Password</label>
                            <input
                              id="password"
                              name="password"
                              type="password"
                              placeholder='password'
                              style={{ marginLeft: 85, borderRadius: 20 }}
                              autoComplete="new-password"
                              required
                              value={password}
                              onChange={handlePasswordChange}
                              className={`form-control ${
                                !isFormValid && validator.isEmpty(password) ? 'is-invalid' : ''
                              }`}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder='confirm password'
                            type="password"
                            style={{ marginLeft: 20, borderRadius: 20 }}
                            autoComplete="new-password"
                            required
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className={`form-control ${
                              !isFormValid || password !== confirmPassword ? 'is-invalid' : ''
                            }`}
                          />
                          {password !== confirmPassword && (
                            <div className="invalid-feedback">
                              Passwords do not match
                            </div>
                          )}
                        </div>

                        <Link
                          className="btn btn-primary btn-block"
                          to="/admin"
                        >
                          Sign in
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              </main>
              
            )}

            
          </div>
        </div>
        
      </div>
    </div>
  );
}
