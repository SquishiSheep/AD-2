import { Box, Center,VStack } from "@chakra-ui/react";
import Chatbox from "./Chartbox"; // Adjust the path as needed

export default function StartPlanning() {
  return (
    <>
      <Center height="100vh">
        <VStack>
          <Box
            border="1px solid #ccc"
            borderRadius="md"
            w="30rem"
            h="20rem"
            boxShadow="md"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Chatbox />
          </Box>
        </VStack>
      </Center>
    </>
  );
}
