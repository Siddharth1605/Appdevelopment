import React, { useState } from 'react';
import '../Styles/patientadmin.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useSelector } from "react-redux";
import { selectAllPatients } from '../features/patient/patientsSlice';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import AddPatientForm from "./AddPatientForm"
import { useEffect } from 'react';
import axios from 'axios';


const PatientAdmin = () => {
  const handleOpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true)
  const [patients, setPatients] = useState([]);
  const apiUrl = 'http://localhost:8080/patients';
  const imgSrc = "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
  useEffect(() => {
    // Function to fetch all patients and update the state
    const fetchPatients = async () => {
      try {
        const response = await axios.get(apiUrl);
        const patientData = response.data;
        setPatients(patientData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    // Call the fetchPatients function when the component mounts
    fetchPatients();
  });

  const handleDeleteAllPatients = () => {
    const url = "http://localhost:8080/patients";
  
    axios.delete(url)
      .then(response => {
        // Handle success, e.g., update the UI or show a success message.
        console.log("All patients deleted successfully.");
      })
      .catch(error => {
        // Handle errors, e.g., display an error message.
        console.error("Error deleting patient:", error);
      });
  };
  
  const handleDeletePatientById = (patientId) => {
    // Send a DELETE request to the server to delete the doctor by ID
    axios
      .delete(`http://localhost:8080/patients/${patientId}`)
      .then((response) => {
        // Handle the successful deletion here (e.g., update the state)
        console.log('Patient deleted successfully');
      })
      .catch((error) => {
        // Handle any errors (e.g., show an error message)
        console.error('Error deleting Patient:', error);
      });
  };

  console.log(patients)
  return (
    <>
    <Sidebar openSidebarToggle={openSidebarToggle} handleOpenSidebar={handleOpenSidebar}/>
    <div className='patientproduct'>

      <div className='addordel'>
      <Link to={"/addPatient"} className='add'>Add Patient</Link>
      <button onClick={handleDeleteAllPatients} className='del'>Delete all patients</button> {/* Use 'add' class for the link */}

      </div>
    <div className="patientproduct-container">
      
      {patients.map((patient, index) => (
        <div className="patientproduct-card" key={index}>
         
          <img src={imgSrc} alt={patient.patientName} className="patientproduct-image" />
          <h3 className="patientproduct-name">Name: {patient.patientName}</h3>
          <p className="patientproduct-description">Age: {patient.patientAge}</p>
          <p className="patientproduct-description">Gender: {patient.patientGender}</p>
          <p className="patientproduct-price">Consultation: {patient.patientConsultation}</p>
          <div className="patientproduct-price">Insurance: {patient.patientInsurance}</div>
          <div className="patientproduct-price">Previous Consultation: {patient.patientPreviousConsultation}</div>
          <button
                className="ask-query-button"
                onClick={() => handleDeletePatientById(patient.id)}

              >
               Patient delete
              </button>

              <Link to={`/editPatient/${patient.id}`} style={{ marginTop: '1%' }}>
              <button className="ask-query-button">
                Patient edit
              </button>
            </Link>
          <br />
        </div>
        
      ))}
      
    </div>
    </div>
    </>
  );
}

export default PatientAdmin;