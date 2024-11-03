import { Box, VStack, Heading,Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Chatbox from "./Chartbox"; // Adjust the path as needed

export default function StartPlanning() {
    return (
        <>
            <Box
                height="100vh"
                bgGradient="linear(to-r, teal.500, blue.600)" // Use the same gradient as in Hero
                color="white"
                p="3rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <VStack
                    spacing={6}
                    bg="rgba(0, 0, 0, 0.7)"
                    p="2rem"
                    borderRadius="lg"
                    boxShadow="xl"
                    width="30rem"
                    maxWidth="500px"
                    align="center"
                >
                    <Heading fontSize="md" opacity={0.8}>Let’s use the prompt to schedule the appointment.</Heading>
                    <Chatbox />
                    <Link to="/claude"><Text fontSize="1rem" fontWeight="100" textAlign="right" mt="0" p="0" opacity={0.5} textDecoration="underline">How is this possible?</Text></Link>
                </VStack>
            </Box>
        </>
    );
}
