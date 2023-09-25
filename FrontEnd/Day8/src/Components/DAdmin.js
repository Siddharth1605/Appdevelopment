import React, { useState } from 'react';
import '../Styles/Doctoradmin.css'; // Make sure to include your DoctorAdmin CSS file
import StarRateIcon from '@mui/icons-material/StarRate';
import { useSelector } from 'react-redux';
import { selectAllDoctors } from '../features/doctor/doctorsSlice';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import AddDoctorForm from './AddDoctorForm';

const DAdmin = () => {
  const handleOpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);

  const doctors = useSelector(selectAllDoctors);

  return (
    <>
      <Sidebar openSidebarToggle={openSidebarToggle} handleOpenSidebar={handleOpenSidebar} />
      <div className="doctor">
        <div className="addordel">
          <Link to="/addDoctor" className='add'>Doctor add</Link> {/* Use 'add' class for the link */}
        </div>
        <div className="product-container">
          {doctors.map((doctor, index) => (
            <div className="product-card" key={index}>
              <img src={doctor.imageSrc} alt={doctor.name} className="product-image" />
              <h3 className="product-name">Name: {doctor.name}</h3>
              <p className="product-description">Qualifications: {doctor.qualifications}</p>
              <p className="product-description">Specialization: {doctor.specialization}</p>
              <p className="product-price">Experience: {doctor.exp}</p>
              <div className="product-price">Age: {doctor.age} years old</div>
              <div className="product-price">
                Ratings: {doctor.rating} <StarRateIcon fontSize="inherit" />
              </div>
              <button
                className="ask-query-button"
                onClick={() => {
                  window.location.href = '/appointment';
                }}
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DAdmin;
