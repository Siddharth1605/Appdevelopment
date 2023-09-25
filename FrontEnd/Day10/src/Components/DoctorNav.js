import React from "react";
import "../Styles/DoctorNav.css";

function DoctorNav(){

    return(
       <div className="nav-bar">
        <div className="nav-bar-title">Care-Nexus-Pro</div>
        <button className="admin-btn">
          <img src="https://image.shutterstock.com/image-vector/user-icon-vector-260nw-393536320.jpg" alt="" className="admin-btn"/>
        </button>
       </div>
    
    )
}
export default DoctorNav;

