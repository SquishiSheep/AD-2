import { NavLink } from 'react-router-dom';
import { Center, Button, HStack, Heading, VStack, Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

export default function Hero() {
  // Define the continuous falling animation
  const fallAnimation = keyframes`
    0% { transform: translateY(-50px); opacity: 0; }
    10% { opacity: 1; }
    90% { transform: translateY(100vh); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  `;

  // Array of colors for the blocks
  const colors = ["#FFD700", "#FF6347", "#ADFF2F", "#1E90FF", "#FF69B4", "#20B2AA", "#FFA500"];

  // Calculate the number of boxes based on screen width
  const boxCount = Math.floor(window.innerWidth / 60); // 60px width for boxes

  return (
    <Center height="100vh" position="relative" overflow="hidden" bg="rgba(255, 255, 255, 0.4)">
      {/* Trivia Blocks */}
      {[...Array(boxCount)].map((_, i) => {
        // Generate random values for starting position and animation duration
        const randomLeft = Math.random() * 100; // Random left position (0 to 100vw)
        const randomDuration = 5 + Math.random() * 5; // Duration between 5s and 10s
        const randomRotation = Math.random() * 360; // Random rotation

        return (
          <Box
            key={i}
            position="absolute"
            top={`${Math.random() * -100}px`} // Random starting position off the top
            left={`${randomLeft}vw`} // Random horizontal position across the width
            width="50px"
            height="50px"
            bg={colors[i % colors.length]}
            opacity="0.8"
            animation={`${fallAnimation} ${randomDuration}s linear infinite`} // Continuous falling
            borderRadius="md"
            transform={`rotate(${randomRotation}deg)`}
          />
        );
      })}

      {/* Main Content */}
      <Box 
        zIndex="1" 
        bg="white"
        p={10} // Increased padding for a larger box
        borderRadius="lg" 
        boxShadow="lg" 
        backdropFilter="blur(5px)" // Adjusted for a subtle frosted glass effect
        border="2px solid rgba(0, 0, 0, 0.1)" // Optional for a border to enhance visibility
        maxWidth="600px" // Optional max width
        width="30%" // Optional to make the box responsive
      >
        <VStack spacing={4}>
          <Heading>AD^2</Heading>
          <HStack spacing={4}>
            <NavLink to="/startplanning">
              <Button
                bg="teal.500"
                color="white"
                _hover={{ bg: "teal.200", color: "black" }}
                transition="background-color 0.3s ease, color 0.3s ease"
              >
                Start Planning
              </Button>
            </NavLink>
            <NavLink to="/progress">
              <Button
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.200", color: "black" }}
                transition="background-color 0.3s ease, color 0.3s ease"
              >
                Progress
              </Button>
            </NavLink>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
