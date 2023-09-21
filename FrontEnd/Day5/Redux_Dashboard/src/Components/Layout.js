
import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component here

function Layout({ children }) {
  return (
    <div>
      <Navbar /> {/* Include your Navbar here */}
      <div className="content">
        {children} {/* This is where the page content will be inserted */}
      </div>
    </div>
  );
}

export default Layout;
