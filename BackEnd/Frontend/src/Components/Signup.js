import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'; 
import "../index.css"
import axios from 'axios';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [role, setRole] = useState('doctor'); 
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    conPassword: '',
    role: ''
  });
  const nav = useNavigate();

  const handleInputChange = (field, value) => {
    setFormErrors({ ...formErrors, [field]: '' });

    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'conPassword':
        setConPassword(value);
        break;
      case 'role':
        setRole(value);
        break;
      default:
        break;
    }
  };

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (!conPassword) {
      errors.conPassword = 'Confirm Password is required';
    } else if (password !== conPassword) {
      errors.conPassword = 'Passwords do not match';
    }

    if (!role) {
      errors.role = 'Role is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {

      const user = {
        role: role, // Set the role as needed
        name,
        email,
        password: password, // Use the hashed password
      };
      
      axios.post("http://localhost:8080/auth/register", user)
        .then(response => {
          alert("User Registered! Kindly Login to proceed");
          nav("/loginoptions"); // Redirect to the desired page after successful registration
        })
        .catch(error => {
          alert(error.response.data);
        });
    }
  };

  const bstyle = {
    backgroundColor:'#1d2634',
    color:'#B6EADA'
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" style={bstyle}>
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900" style={bstyle}>
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="current-username"
                  required
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formErrors.name && (
                  <p className="mt-2 text-sm text-red-500">{formErrors.name}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900" style={bstyle}>
                  Email
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-email"
                  required
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formErrors.email && (
                  <p className="mt-2 text-sm text-red-500">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" style={bstyle}>
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-no"
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formErrors.password && (
                  <p className="mt-2 text-sm text-red-500">{formErrors.password}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="conPassword" className="block text-sm font-medium leading-6 text-gray-900" style={bstyle}>
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="conPassword"
                  name="conPassword"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => handleInputChange('conPassword', e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formErrors.conPassword && (
                  <p className="mt-2 text-sm text-red-500">{formErrors.conPassword}</p>
                )}
              </div>
            </div>

            <div>
              <div className="block text-sm font-medium leading-6 text-gray-900" style={bstyle}>
                Role
              </div>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="doctor"
                    checked={role === 'doctor'}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2">Doctor</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    name="role"
                    value="patient"
                    checked={role === 'patient'}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="form-radio h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2">Patient</span>
                </label>
              </div>
              {formErrors.role && (
                <p className="mt-2 text-sm text-red-500">{formErrors.role}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                onClick={validate}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to={"/loginoptions"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
