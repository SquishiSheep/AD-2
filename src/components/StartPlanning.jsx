import { Box, Heading, VStack,Text} from '@chakra-ui/react';
import Chatbox from './Chartbox';
import { Link } from 'react-router-dom';

const StartPlanning = () => {

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      backgroundColor="black"
    >
      <Box
        position="relative"
        width="640px"
        height="640px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        border="2px solid white"
        overflow="hidden"
        backgroundColor="black"
      >

        {/* Overlay Content */}
        <VStack
      position="absolute"
      zIndex={3}
      color="white"
      textAlign="center"
      spacing={5}
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.7)',
      }}
    >
      <Heading
        fontSize="md"
        opacity={0.8}
        style={{
          textShadow: '0 0 5px rgba(0, 255, 255, 0.9), 0 0 10px rgba(255, 0, 255, 0.9)',
        }}
      >
        Let’s use the prompt to schedule the appointment.
      </Heading>
      <Chatbox />
      <Link to="/claude">
        <Text
          fontSize="1rem"
          fontWeight="100"
          textAlign="right"
          mt="0"
          p="0"
          opacity={0.5}
          textDecoration="underline"
          style={{
            textShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
            transition: 'opacity 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.5)}
        >
          How is this possible?
        </Text>
      </Link>
    </VStack>
      </Box>
    </Box>
  );
};

export default StartPlanning;

