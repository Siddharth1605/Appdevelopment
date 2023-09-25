import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import BookAppointment from "../Components/BookAppointment";
import Doctors from "../Components/Doctors";
import Reviews from "../Components/Reviews";
import Footer from "../Footer/Footer"
function Home() {
  return (
    <div className="home-section" style={{backgroundColor:'#1d2634'}}>
      <Hero />
      
        
      <BookAppointment />
      <Doctors />
    </div>
  );
}

export default Home;
