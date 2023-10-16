import React from 'react';
import { VStack, Box, Text, Image } from '@chakra-ui/react';
import { TbBrandBooking } from 'react-icons/tb';
import { selectAllPatients } from '../features/patient/patientsSlice';
import { useSelector } from 'react-redux';
import doctor_dashb from "../Assets/doctor_dashboard.jpg";
import { useEffect } from 'react';
import { getToken, getRole, removeToken, removeEmail, removeRole } from './LocalStorage';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
function Doctordash() {
  console.log(getRole())
  const nav = useNavigate()
  const CryptoJS = require('crypto-js');
  const token = getToken()
  const [patients, setPatients] = useState([]);
  const apiUrl = 'http://localhost:8080/patients';
  const imgSrc = "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
  const apiUrl1 = 'http://localhost:8080/appointment';
  const [appointments, setAppointments] = useState([]);

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
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(apiUrl1);
        const appointmentData = response.data;
        setAppointments(appointmentData);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, [apiUrl1]);

  let datas = [];
  patients.map(patient => {
    const patientData = {
      patientName: patient.patientName,
      patientAge: patient.patientAge, // Corrected property name
      patientGender: patient.patientGender,
      patientConsultation: patient.patientConsultation,
      patientInsurance: patient.patientInsurance,
      patientPreviousConsultation: patient.patientPreviousConsultation
    };
    datas.push(patientData);
  });
  console.log(datas);
  
  return (
    <div>
      <div style={{ backgroundColor: '#1d2634' }}>
        <VStack
          spacing={4}
          align='stretch'
          px={['2', '4', '6']} // Responsive padding
        >
          {token && getRole() === "DOCTOR" || getRole() === "ADMIN" ? (
            <>
        <Box
        h={['40px', '50px']} // Responsive height
        bg='#1d2634'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          fontSize={['18px', '24px', '30px']} // Responsive font size
          color='#1d2634'
          as='b'
        >
          Hi Sid! Welcome to Mr.Medico
        </Text>
      </Box>
      <Box
          w={['100%', '80%']}
          h={['200px', '300px']}
          ml={['0', 'auto', '100px']} // Responsive margin-left (auto centers on small screens)
          maxW={['100%', '900px']}
          mx={['0', 'auto']}
          backgroundColor='#fff'
          p={['4', '6']}
          borderRadius='md'
          boxShadow='md'
          display='flex'
          flexDirection={['column', 'row']}
          gap={['2', '4']}
        >
            <Image
              src={doctor_dashb}
              alt="Doctor Dashboard"
              maxH="500px"
              style={{ height: '250px', marginRight: '650px' }}
            />
          </Box>
          <Box
            w={['100%', '80%']}
            h={['200px', '300px']}
            ml={['0', 'auto', '100px']} 
            maxW={['100%', '900px']}
            mx={['0', 'auto']}
            backgroundColor='#fff'
            p={['4', '6']}
            borderRadius='md'
            boxShadow='md'
            display='flex'
            justifyContent={['center', 'flex-start']}
            alignItems={['center', 'flex-start']}
            flexDirection={['column', 'row']}
            gap={['2', '4']}
          >
            <TbBrandBooking style={{ fontSize: '30px', color: 'black' }} />
            <Box textAlign={['center', 'left']}>
              <Text fontSize={['24px', '30px']} color='black' as='b'>
                No of Appointments
              </Text>
              <Text fontSize={['16px', '20px']} color='black'>
                Appointment 1 : Harry Stephen 6:00 PM
              </Text>
              <br />
              <Text fontSize={['16px', '20px']} color='black'>
                Appointment 2 : Harry Stephen1 8:00 PM
              </Text>
            </Box>
          </Box>

          {appointments.map((appt, index) => (
            <Box
              key={index}
              w={['100%', '80%']}
              h={['auto', 'auto', '300px']}
              ml={['0', 'auto', '100px']}
              maxW={['100%', '900px']}
              mx={['0', 'auto']}
              backgroundColor='#fff'
              p={['4', '6']}
              borderRadius='md'
              boxShadow='md'
              display='flex'
              justifyContent={['center', 'flex-start']}
              alignItems={['flex-start', 'flex-start', 'center']}
              flexDirection={['column', 'column', 'row']}
              gap={['2', '4']}
            >
            <img
            src={imgSrc}
            alt={appt.name}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              marginBottom: '10px',
              marginTop: ['10px', '10px', '0'],
              marginRight: '30px',
            }}
          />
              <Box
                textAlign={['center', 'left']}
                width={['100%', '100%', '70%']}
                marginLeft={['0', '20px']}
              >
                <Text fontSize={['24px', '30px']} color='black' as='b'>
                  Name: {appt.patientName}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Email: {appt.email}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Phone Number: {appt.phoneNumber}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Appointment: {appt.appointmentTime}
                </Text>
              </Box>
            </Box>
          ))}

          {patients.map((patient, index) => (
            <Box
              key={index}
              w={['100%', '80%']}
              h={['auto', 'auto', '300px']}
              ml={['0', 'auto', '100px']}
              maxW={['100%', '900px']}
              mx={['0', 'auto']}
              backgroundColor='#DDE6ED'
              p={['4', '6']}
              borderRadius='md'
              boxShadow='md'
              display='flex'
              justifyContent={['center', 'flex-start']}
              alignItems={['flex-start', 'flex-start', 'center']}
              flexDirection={['column', 'column', 'row']}
              gap={['2', '4']}
            >
              <img
                src={imgSrc}
                alt={patient.name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  marginBottom: '10px',
                  marginTop: ['10px', '10px', '0'],
                  marginRight: '30px',
                }}
              />
              <Box
                textAlign={['center', 'left']}
                width={['100%', '100%', '70%']}
                marginLeft={['0', '20px']}
              >
                <Text fontSize={['24px', '30px']} color='black' as='b'>
                  Name: {patient.patientName}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Age: {patient.patientAge} Years
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Consultation: {patient.patientConsultation}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Insurance: {patient.patientInsurance}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Previous Consultation: {patient.patientPreviousConsultation}
                </Text>
              </Box>
            </Box>
                
            
          ))}
 
          </>
          ) : (
            <>
            <Box
        h={['40px', '50px']} // Responsive height
        bg='#1d2634'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          fontSize={['18px', '24px', '30px']} // Responsive font size
          color='#1d2634'
          as='b'
        >
          Hi Sid! Welcome to Mr.Medico
        </Text>
      </Box>
            // Content to display when not authenticated
            <Box
              w={['100%', '80%']}
              h={['200px', '300px']}
              ml={['0', 'auto', '100px']} // Responsive margin-left (auto centers on small screens)
              maxW={['100%', '900px']}
              mx={['0', 'auto']}
              backgroundColor='#fff'
              p={['4', '6']}
              borderRadius='md'
              boxShadow='md'
              display='flex'
              flexDirection={['column', 'row']}
              gap={['2', '4']}
            >
              <Text fontSize={['24px', '30px']} color='black' as='b'>
                You don't have authentication to access this page.
              </Text>
            </Box>
            </>
          )}
          <Box
          h={['40px', '50px']} // Responsive height
          bg='#1d2634'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Text
            fontSize={['18px', '24px', '30px']} // Responsive font size
            color='#1d2634'
            as='b'
          >
            Hi Sid! Welcome to Mr.Medico
          </Text>
        </Box>
        </VStack>
        
      </div>
    </div>
  );
}

export default Doctordash;
