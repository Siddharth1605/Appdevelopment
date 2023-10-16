import React from 'react';
import { VStack, Box, Button, Stack, Text, Image } from '@chakra-ui/react'; // Import Image from Chakra UI
import { Link } from 'react-router-dom';
import doctor_image from '../Assets/doctor_logion_options.jpg';

function LoginOptions() {
  const pageStyle = {
    backgroundColor: '#1d2634',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={pageStyle}>
    <Box
    width={['80%', '60%']}
    m={['0 auto', '0']}
  >
    <Image
      src={doctor_image}
      alt="Doctor"
      style={{height:400, width:400, borderRadius:'5%'}}
      marginTop={100}
      marginLeft={410}
      maxHeight={['10px', 'none']} // Adjust the maxHeight to control the height of the image
    />
  </Box>
  
      <VStack
        spacing={4}
        align='center'
        justify='center'
        px={['2', '4', '6']}
        alignContent={'center'}
        marginTop={160}
      >
        <Text fontSize='18px' fontWeight='bold' color='white'>
          For your convenient login, choose the appropriate role
        </Text>

        <Box
          h={['10px', '200px']}
          bg='black'
          display='flex'
          justifyContent='center'
          alignItems='center'
          m={['50px', '100px']}
          ml={['50px', '100px']}
          w={['20px', '500px']}
          alignSelf={'center'}
          alignContent={'center'}
          style={{ backgroundColor: 'teal', marginTop: 15, borderRadius: 10 }}
        >
          <Stack spacing={55} direction={'row'}>
            <Link to='/patientLogin'>
              <Button size='lg' _hover={{ bg: 'darkorange' }}>Patient</Button>
            </Link>
            <Link to='/doctorLogin'>
              <Button size='lg' _hover={{ bg: 'darkorange' }}>Doctor</Button>
            </Link>
            <Link to='/adminLogin'>
              <Button size='lg' _hover={{ bg: 'darkorange' }}>Admin</Button>
            </Link>
          </Stack>
        </Box>
      </VStack>
    </div>
  );
}

export default LoginOptions;
