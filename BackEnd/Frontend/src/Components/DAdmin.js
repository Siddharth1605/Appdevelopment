import React, { useState } from 'react';
import '../Styles/Doctoradmin.css'; // Make sure to include your DoctorAdmin CSS file
import StarRateIcon from '@mui/icons-material/StarRate';
import { useSelector } from 'react-redux';
import { selectAllDoctors } from '../features/doctor/doctorsSlice';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import AddDoctorForm from './AddDoctorForm';
import { useEffect } from 'react';
import axios from 'axios';
const DAdmin = () => {
  const handleOpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);

  const [doctors, setDoctors] = useState([]);
  const apiUrl = 'http://localhost:8080/doctors';
  const imgSrc = "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
  useEffect(() => {
    // Function to fetch all patients and update the state
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(apiUrl);
        const doctorData = response.data;
        setDoctors(doctorData);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    // Call the fetchPatients function when the component mounts
    fetchDoctors();
  });

  const handleDeleteAllDoctors = () => {
    const url = "http://localhost:8080/doctors";
  
    axios.delete(url)
      .then(response => {
        // Handle success, e.g., update the UI or show a success message.
        console.log("All doctors deleted successfully.");
      })
      .catch(error => {
        // Handle errors, e.g., display an error message.
        console.error("Error deleting doctor:", error);
      });
  };

  const handleDeleteDoctorById = (doctorId) => {
    // Send a DELETE request to the server to delete the doctor by ID
    axios
      .delete(`http://localhost:8080/doctors/${doctorId}`)
      .then((response) => {
        // Handle the successful deletion here (e.g., update the state)
        console.log('Doctor deleted successfully');
      })
      .catch((error) => {
        // Handle any errors (e.g., show an error message)
        console.error('Error deleting doctor:', error);
      });
  };
  return (
    <>
      <Sidebar openSidebarToggle={openSidebarToggle} handleOpenSidebar={handleOpenSidebar} />
      <div className="doctor">
        <div className="addordel">
          <Link to="/addDoctor" className='add'> Add Doctor</Link> {/* Use 'add' class for the link */}
          <button onClick={handleDeleteAllDoctors} className='del'>Delete all doctors</button> {/* Use 'add' class for the link */}
        </div>

        <div className="product-container">
          {doctors.map((doctor, index) => (
            <div className="product-card" key={index}>
              <img src={imgSrc} alt={doctor.doctorName} className="product-image" />
              <h3 className="product-name">Name: {doctor.doctorName}</h3>
              <p className="product-description">Qualifications: {doctor.doctorQualification}</p>
              <p className="product-description">Gender: {doctor.doctorGender}</p>
              <p className="product-price">Experience: {doctor.doctorExperience}</p>
              <div className="product-price">Age: {doctor.doctorAge} years old</div>
              <div className="product-price">
                Ratings: {doctor.doctorRating} <StarRateIcon fontSize="inherit" />
              </div>
              <button
                className="ask-query-button"
                onClick={() => handleDeleteDoctorById(doctor.id)}

              >
               Doctor delete
              </button>

              <Link to={`/editDoctor/${doctor.id}`} style={{ marginTop: '1%' }}>
              <button className="ask-query-button">
                Doctor edit
              </button>
            </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DAdmin;
