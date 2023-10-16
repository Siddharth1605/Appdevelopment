import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from './LocalStorage';

export default function Dummy() {
  const token = getToken();
  const apiUrl = 'http://localhost:8080/auth/patients';

  // Define a state to store the fetched patients
  const [patients, setPatients] = useState([]);

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
  }, []);

  return (
    <div>
      <h1>Patients List</h1>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id} style={{backgroundColor:'red'}}>
            <p>ID: {patient.id}</p>
            <p>Name: {patient.patientName}</p>
            <p>Age: {patient.patientAge}</p>
            <p>Gender: {patient.patientGender}</p>
            <p>Consultation: {patient.patientConsultation}</p>
            <p>Insurance: {patient.patientInsurance}</p>
            <p>Previous Consultation: {patient.patientPreviousConsultation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
