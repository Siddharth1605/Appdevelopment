import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../login.css'

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false); // New state variable

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

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
    e.preventDefault(); // Prevent the default form submission behavior

    // You can perform validation and signup logic here using the state variables.
    // For example, send a request to your signup API.

    // Assuming signup is successful:
    setIsSignupSuccessful(true);

    // Reset the input fields after submission if needed
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center sid">
        <div className="custom-gradient shadow-md rounded-lg p-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            

            {isSignupSuccessful ? ( 
              <div className="mt-4 bg-purple-600 border border-purple-400 text-purple-100 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Account created</strong> 
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-purple-100"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    onClick={() => setIsSignupSuccessful(false)}
                  >
                    <title>Close</title>
                    <path
                      d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.293a1 1 0 111.414-1.414L10 8.586l4.293-4.293z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            ) : (
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up</h2>
            </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <div className="mt-2">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                      required
                      value={username}
                      onChange={handleUsernameChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      autoComplete="new-password"
                      required
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-purple-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              </div>
              )}
  
              <p className="mt-10 text-center text-sm text-black-500">
              Already have an account?{' '}
              <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-purple-500">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
