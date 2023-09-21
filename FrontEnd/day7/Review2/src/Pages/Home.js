import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import BookAppointment from "../Components/BookAppointment";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Reviews from "../Components/Reviews";
function Home() {
  return (
    <div className="home-section">
      <Hero />
      
        
      <BookAppointment />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
