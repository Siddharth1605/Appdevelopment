import React from 'react';
import { VStack, Box, Text, Image } from '@chakra-ui/react';
import { TbBrandBooking } from 'react-icons/tb';
import { selectAllPatients } from '../features/patient/patientsSlice';
import { useSelector } from 'react-redux';
import doctor_dashb from "../Assets/doctor_dashboard.jpg";

function Doctordash() {
  const patients = useSelector(selectAllPatients);

  return (
    <div>
      <div style={{ backgroundColor: '#1d2634' }}>
        <VStack
          spacing={4}
          align='stretch'
          px={['2', '4', '6']} // Responsive padding
        >
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
            ml={['0', 'auto', '100px']} // Responsive margin-left (auto centers on small screens)
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

          {/* Transparent box for the image */}
          

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
                src={patient.imageSrc}
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
                  Name: {patient.name}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Age: {patient.age} Years
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Consultation: {patient.consultation}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Insurance: {patient.insurance}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Previous Consultation: {patient.prev}
                </Text>
              </Box>
            </Box>
                
            
          ))}
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
