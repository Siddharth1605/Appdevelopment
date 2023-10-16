import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import axios from 'axios';
import {setRole, setToken, setEmail, removeEmail, removeRole, removeToken} from './LocalStorage'
import doctor_image from '../Assets/AdminImg.jpg';
export default function Adminlogin() {
  const nav = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;
    const errors = {};

    if (!formData.email) {
      valid = false;
      errors.email = "Email is required";
    }

    if (!formData.password) {
      valid = false;
      errors.password = "Password is required";
    }

    setFormErrors(errors);

    const userCredentials = {
      email: formData.email,
      password: formData.password,
    };
    axios.post("http://localhost:8080/auth/login", userCredentials).then(response => {
      console.log(response);
      const token = response.data.token;
      if (token) {
        removeToken();
        removeEmail();
        removeRole();
        setToken(token);
        setEmail(userCredentials.email);
        const userType = response.data.role;
        setRole(userType);
        if (userType === "PATIENT") {
          nav("/userdash");
        } else {
          alert("Invalid user role");
          nav("/loginoptions")
        }
      } else {
        alert("Invalid token. Please try again.");
      }
    }).catch(error => {
      alert(error.response.data);
    });
    console.log(formErrors);
  };

  const imageStyle = {
    flex: '1',
    maxWidth: '20%', // Increase the image size
    height:'50%',
    width:'85%',
    marginTop:'10%',
    marginLeft:'20%'
  };

  const bstyle = {
    backgroundColor: '#1d2634',
    color: '#B6EADA',
  };

  const signUpFormStyle = {
    marginTop: '10%', // Increase the margin-top of the signup form
    marginLeft:'-10%'
  };

  return (
    <div className="flex min-h-screen" style={bstyle}>
      <div className="flex-1 flex flex-row px-6 py-12 lg:px-8">
        <div style={imageStyle} className="hidden md:block">
          <img src={doctor_image} style={{ borderRadius: '15%' }} alt="Doctor" />
        </div>

        <div className="flex-1 ml-4" style={signUpFormStyle}>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm" style={{ color: '#B6EADA' }}>
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900" style={{ color: '#B6EADA' }}>
              Sign in to your Patient account
            </h2>
          </div>

    
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" >
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"

              style={{color:'#B6EADA '}}
            >
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
              onChange={handleChange}
              value={formData.email}
              
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                formErrors.email ? "border-red-500" : ""
              }`}
            />
            {formErrors.email && (
              <p className="mt-2 text-sm text-red-500">{formErrors.email}</p>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
              style={{color:'#B6EADA '}}
            >
              Password
            </label>
            <div className="text-sm">
              <Link
                to={"/fpwd"}
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={handleChange}
              value={formData.password}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                formErrors.password ? "border-red-500" : ""
              }`}
            />
            {formErrors.password && (
              <p className="mt-2 text-sm text-red-500">
                {formErrors.password}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            onClick={validateForm}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-2 text-center text-sm text-gray-500">
      Not a member?{" "}
      <Link
        to={"/signup"}
        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >
        Sign up
      </Link>
    </p>
  </div>
</div>
</div>
</div>
);
}