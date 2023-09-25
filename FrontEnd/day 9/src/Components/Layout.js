
import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component here
import Footer from "../Footer/Footer"

function Layout({ children }) {
  return (
    <div>
      <Navbar /> {/* Include your Navbar here */}
      <div className="content">
        {children} {/* This is where the page content will be inserted */}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
