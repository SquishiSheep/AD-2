import { Card, CardHeader, CardBody, CardFooter, Box, Button, Icon, Flex, Text, Input, Avatar, Divider } from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { MdSend, MdFlashOn } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Chatbox() {
    const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      output: "How can I help you today?", // Initial response from the assistant
    }
  ]);
  const [awaitingDetails, setAwaitingDetails] = useState(false); // Track if we're awaiting details for an appointment

  const chatContainerRef = useRef(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    if (userInput.trim() === "") return; // Prevent empty messages

    // Add user input to the chat history
    const newUserInteraction = {
      input: userInput,
      output: "" // Placeholder for the assistant's response
    };

    // Update chat history to include the user's message
    setChatHistory((prev) => [...prev, newUserInteraction]);

    // Clear input field
    setUserInput("");

    // Add "typing..." placeholder response from AI
    setChatHistory((prev) => [...prev, { output: "typing..." }]);

    // Simulate assistant response based on user input
    setTimeout(() => {
      let aiResponse;

      if (awaitingDetails) {
        // If we're awaiting details, acknowledge the information provided
        aiResponse = (
            <Flex align="center">
              <Text>I have created the appointment and kept the schedule in the calendar. <Button
                size="xs"
                colorScheme="blue"
                ml={2}
                onClick={() => navigate('/progress')} // Redirect on click
              >
                Link
              </Button> </Text>
            </Flex>
          );
        setAwaitingDetails(false); // Reset the state after getting the details
      } else if (userInput.toLowerCase().includes("appointment")) {
        aiResponse = "Can you please specify the hospital name, location, time available for this week, and your email so I can send the appointment confirmation?";
        setAwaitingDetails(true); // Set the state to indicate we're awaiting details
      } else {
        aiResponse = "Could you please repeat that? I'm still learning and might not understand everything.";
      }

      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1] = { output: aiResponse };
        return updatedHistory;
      });
    }, 3000); // 3-second delay
  };

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <Card
      width="100%"
      height="25rem"
      borderRadius="10px"
      bg="white"
      shadow="0px 2px 2px 2px rgba(0, 0, 0, 0.3)"
    >
      <CardHeader pb="0">
        <Flex align="center" justify="space-between">
          <Text fontSize="1rem" fontWeight="bold">
            Smart Calendar <Icon as={MdFlashOn} />
          </Text>
        </Flex>
        <Divider color="gray" pt="1rem" />
      </CardHeader>
      <CardBody pt="0">
        <Flex justify="center">
          <Box ref={chatContainerRef} width="100%" maxHeight="16rem" overflowY="auto">
            {chatHistory.map((message, index) => (
              <Flex key={index} flexDirection="column" m="1rem">
                {/* AI Output */}
                {message.output && (
                  <Flex justify='flex-start' alignItems="center" pb="0.5rem">
                    <Avatar name="ChatBot" size="xs" />
                    <Text fontSize="0.85rem" ml={2} mr="2rem" color="gray.800">{message.output}</Text>
                  </Flex>
                )}
                {/* Display User Input only if it exists */}
                {message.input && (
                  <Flex justify='flex-end' alignItems="center" pb="0.5rem">
                    <Text fontSize="0.85rem" color="gray.600">{message.input}</Text>
                    <Avatar name="Human" size="xs" ml="0.5rem" />
                  </Flex>
                )}
              </Flex>
            ))}
          </Box>
        </Flex>
      </CardBody>
      <CardFooter>
        <Input
          placeholder="Ask me anything..."
          type="text"
          value={userInput}
          onChange={handleInputChange}
          colorScheme='purple'
          borderColor="purple"
          size="sm"
          mr="0.5rem"
          onKeyDown={(event) => { if (event.key === "Enter") { handleSubmit() } }}
        />
        <Button colorScheme="purple" onClick={handleSubmit} size="sm">
          <Icon as={MdSend} />
        </Button>
      </CardFooter>
    </Card>
  );
}
