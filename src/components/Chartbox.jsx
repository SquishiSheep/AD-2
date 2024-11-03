import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  Icon,
  Flex,
  Text,
  Input,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { MdSend, MdFlashOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Chatbox() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      output: "How can I help you today?", // Initial response from the assistant
    },
  ]);
  const [awaitingDetails, setAwaitingDetails] = useState(false);

  const chatContainerRef = useRef(null);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    if (userInput.trim() === "") return;

    const newUserInteraction = {
      input: userInput,
      output: "",
    };

    setChatHistory((prev) => [...prev, newUserInteraction]);
    setUserInput("");

    setChatHistory((prev) => [...prev, { output: "typing..." }]);

    setTimeout(() => {
      let aiResponse;

      if (awaitingDetails) {
        aiResponse = (
          <Flex align="center">
            <Text>
              I have created the appointment and kept the schedule in the calendar.{" "}
              <Button
                size="xs"
                colorScheme="blue"
                ml={2}
                onClick={() => navigate("/progress")}
              >
                Link
              </Button>{" "}
            </Text>
          </Flex>
        );
        setAwaitingDetails(false);
      } else if (userInput.toLowerCase().includes("appointment")) {
        aiResponse =
          "Can you please specify the hospital name, location, time available for this week, and your email so I can send the appointment confirmation?";
        setAwaitingDetails(true);
      } else {
        aiResponse ="Could you please repeat that? I'm still learning and might not understand everything.";
      }

      setChatHistory((prev) => {
        const updatedHistory = [...prev];
        updatedHistory[updatedHistory.length - 1] = { output: aiResponse };
        return updatedHistory;
      });
    }, 3000); // 3-second delay
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <Card
      width="25rem"
      height="25rem"
      borderRadius="10px"
      bg="black"
      shadow="0px 2px 2px 2px rgba(0, 0, 0, 0.3)"
      border="3px solid cyan" // Bright border
    >
      <CardHeader pb="0">
        <Flex align="center" justify="space-between">
          <Text fontSize="1rem" fontWeight="bold" color="cyan" textShadow="0 0 5px #0ff">
            Smart Planning <Icon as={MdFlashOn} color="cyan" />
          </Text>
        </Flex>
        <Divider color="cyan" pt="1rem" />
      </CardHeader>
      <CardBody pt="0">
        <Flex justify="center">
          <Box
            ref={chatContainerRef}
            width="100%"
            maxHeight="16rem"
            overflowY="auto"
            bg="rgba(30, 30, 30, 0.8)" // Semi-transparent background for chat area
            borderRadius="md"
          >
            {chatHistory.map((message, index) => (
              <Flex key={index} flexDirection="column" m="1rem">
                {/* AI Output */}
                {message.output && (
                  <Flex justify="flex-start" alignItems="center" pb="0.5rem">
                    <Avatar name="ChatBot" size="xs" />
                    <Text fontSize="0.85rem" ml={2} mr="2rem" color="cyan" textShadow="0 0 5px #0ff">
                      {message.output}
                    </Text>
                  </Flex>
                )}
                {/* Display User Input only if it exists */}
                {message.input && (
                  <Flex justify="flex-end" alignItems="center" pb="0.5rem">
                    <Text fontSize="0.85rem" color="yellow" textShadow="0 0 5px #ff0">
                      {message.input}
                    </Text>
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
          color="white"
          size="sm"
          mr="0.5rem"
          _placeholder={{
            color: "cyan",
            textShadow: "0 0 5px #0ff, 0 0 10px #f0f",
          }}
          sx={{
            textShadow: "0 0 5px #0ff, 0 0 10px #f0f",
            fontWeight: "bold",
            background: "linear-gradient(to right, #1a1a1a, #2e2e2e)",
            border: "1px solid",
            borderColor: "cyan",
            borderRadius: "md",
            boxShadow: "0 0 8px #0ff, 0 0 12px #f0f",
            _focus: {
              borderColor: "cyan",
              boxShadow: "0 0 15px #0ff, 0 0 25px #f0f",
            },
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSubmit();
            }
          }}
        />

        <Button
          onClick={handleSubmit}
          size="sm"
          color="#ffffff"
          bgGradient="linear(to-r, blue.500, pink.500)"
          border="2px solid #92e7ff"
          borderRadius="md"
          fontWeight="bold"
          textTransform="uppercase"
          textShadow="0 0 8px #0ff, 0 0 16px #f0f"
          _hover={{
            color: "#000000",
            bg: "#ff00ff",
            boxShadow: "0 0 15px #0ff, 0 0 25px #f0f, 0 0 50px #00f",
          }}
          transition="all 0.3s ease-in-out"
        >
          <Icon as={MdSend} />
        </Button>
      </CardFooter>
    </Card>
  );
}
