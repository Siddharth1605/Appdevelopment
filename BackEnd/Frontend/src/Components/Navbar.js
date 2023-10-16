import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaStethoscope } from "react-icons/fa";
import { SlMustache } from "react-icons/sl";
import {getRole, getToken, removeToken, removeRole, removeEmail } from "./LocalStorage";
function Navbar() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const nav = useNavigate()
  const handleLogout = () => {
    removeEmail()
    removeToken()
    removeRole()
    window.location.href = "/"
  }
  const role = getRole()
  const token = getToken()
 
  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">Mr.Medico 
        <Link to="/">
          <span className="navbar-signx" style={{fontSize:30, color:'black'}}><FaStethoscope style={{padding:2}}/></span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
      
        
       
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>

        <li>
          <a href="#contact" className="navbar-links">
            Contact Us
          </a>
        </li>

        {role === null ? (
          <li>
            <a href="/loginoptions" className="navbar-links">
              Login
            </a>
          </li>
        ) : (
          <button className="navbar-links" onClick={handleLogout}>
            Logout
          </button>
        )}
      </ul>

      {(token === null || role === "ADMIN") ? (
        <button
          className="navbar-btn"
          type="button"
          disabled={isButtonDisabled}
          onClick={handleChatBtnClick}
        >
          <FontAwesomeIcon icon={faCommentDots} /> Live Chat
        </button>
      ) : (
        <button
        className="navbar-btn"
        type="button"
        onClick={() => {
          if (role === 'DOCTOR') {
            nav('/doctorProfile');
          } else if (role === 'PATIENT') {
            nav('/patientProfile');
          } else {
            console.log('Invalid role or no role provided.'); // You can handle this case as needed
          }
        }}
      >
        UserProfile
      </button>
      
      )}

      {/* Mobile */}
          </div>
  );
}

export default Navbar;
