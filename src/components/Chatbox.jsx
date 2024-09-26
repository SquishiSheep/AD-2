import { Card, CardHeader, CardBody, CardFooter,Box, Button, Icon, Flex, Heading, Input } from '@chakra-ui/react';
import{ useState, useEffect,useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdSend, MdFlashOn } from 'react-icons/md';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'; // Assuming npm install is done
import { Avatar,Divider,Image } from '@chakra-ui/react'
import chat_image from "./chat.png"
const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = "AIzaSyD5I_9HLosGhc1N-_yypxfWw9cnpah1mgU"; // Replace with your actual API key
import "./Chatbox.css"

export default function Chatbox(){

  const [showChatbox, setShowChatbox] = useState(true);

  const toggleChatbox = () => {
    setShowChatbox(!showChatbox);
  }
    return(
      <>
          {showChatbox ? (
            <ChatboxHide onClick={toggleChatbox} />
          ) : (
            <ChatboxShow onClick={toggleChatbox} />
          )}
      </>
    )

}

// eslint-disable-next-line react/prop-types
const ChatboxHide=({onClick})=>{
return(
  <Box
    position="fixed"
    bottom={{lg:"4rem",base:"4rem"}}
    right={{ base: "0.4rem", md: "4rem",lg:"3rem" }}
    zIndex="100000000"
    borderRadius="0.8rem"
    onClick={onClick}
  >
    <Image
      // borderRadius="full"
      objectFit="cover"
      transfor="scale(1.3)"
      width="9rem"
      src={chat_image}
      alt='chatbot icon'
      animation="shake 0.9s infinite alternate"
    />
  </Box>
)
}
// eslint-disable-next-line react/prop-types
const ChatboxShow=({onClick})=>{
    const [userInput,setUserInput]=useState("");

    const handleInputChange=(e)=>{
        setUserInput(e.target.value);
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME ,
        systemInstruction: "Welcome to Dipesh Pandit's website! I'm an AI assistant created by Dipesh, here to provide information about him and his projects. Feel free to ask me anything!\n\nQuick Info about Dipesh Pandit:\n\nBackground: Originally from Nijgadh, Bara, Nepal. Graduated from Himalayan White House International Secondary School, Kathmandu. Currently studying Computer Science at Texas State University, USA.\nPassions: Web development, AI, Machine Learning, photography (portraits and landscapes), YouTube (Tech DD Twins and DD Twins Vlog channels), cycling, trekking, and chess.\nProjects: Check out his projects in the portfolio section of the website.\nContact Information:\n\nFor general inquiries, please use the contact form on the website at /contact.\nRecruiters can reach out via LinkedIn: Dipesh's LinkedIn.\nRestrictions:\n\nBe polite while responding and always respond briefly.\nDo not say that you are unable to answer any other queries unless the user asks a question that you cannot answer.\nIf you are unable to answer a question, direct the user to the contact page.\nIf someone asks, mention that you are the AI assistant created by Dipesh and you are here to provide information about him. Encourage them to feel free to ask questions.",
    });

    const generationConfig = {
      temperature: 1,
      topK: 64,
      topP: 0.95,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [
            {text: "who is Dipesh\n"},
          ],
        },
      ],
    });

    const [chatHistory, setChatHistory] = useState({
        interactions: [
            {
                input: "who are you?",
                output: "I am an AI assistant..."
              }
        ]
    });

    // Function to add a new interaction
    function addInteraction(userInput, botOutput) {
        const newInteractions = [...chatHistory.interactions, {
            input: userInput,
            output: botOutput
        }];
        setChatHistory({ interactions: newInteractions });
        setUserInput("")
    }

    const handleSubmit= async()=>{
        const result = await chat.sendMessage(userInput);
        const response = result.response;
        const fullResponse=response.text();
        addInteraction(userInput, fullResponse);
    }

    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, [chatHistory.interactions]); // Include the correct dependency here

  return (

      <Card
        position="fixed"
        bottom={{base:"6rem",lg:"4rem"}}
        right={{ base: "1rem", md: "3rem",lg:"2rem" }}
        width="20rem"
        zIndex="100000000"
        borderRadius="10px"
        bg="white"
        shadow=" 0px 2px 2px 2px rgba(0, 0, 0, 0.3)"
      >
        <CardHeader pb="0">
          <Flex align="center" justify="space-between">
            <Heading as="h6" fontSize="1rem">
            Chatbot<Icon  as={MdFlashOn} />
            </Heading>
            <Button colorScheme="purple" onClick={onClick} size="sm">
              <Icon as={FaTimes} />
            </Button>
          </Flex>
          <Divider color="gray" pt="1rem"/>
        </CardHeader>
        <CardBody pt="0">
            <Box overflowY="scroll" maxH="40vh" minH="40vH" pr="1rem" ref={chatContainerRef}>
            {chatHistory.interactions.map((message, index) => (
                <>
                <Flex key={index} justify='flex-end' pb="1rem">
                    <Heading fontSize="0.7rem"fontWeight={400} ml="3rem" pt="0.25rem">{message.input}</Heading>
                    <Avatar  name="Human" size="xs" ml="0.5rem" />
                </Flex>
                <Flex key={index} justify='flex-start' pb="1rem">
                    <Avatar name="ChatBot" size="xs" />
                    <Heading fontSize="0.8rem" ml={2} fontWeight={600} mr="2rem" pt="0.25rem">{message.output}</Heading>
                </Flex>
            </>
            ))}
            </Box>
        </CardBody>
        <CardFooter>
            <Input
                placeholder="Ask me anything..."
                type="text"
                value={userInput}
                onChange={handleInputChange}
                colorScheme='purple'
                borderColor="purple"
                size="sm" mr="0.5rem"
                onKeyDown={(event)=>{if(event.key==="Enter"){handleSubmit()}}}
            />
            <Button colorScheme="purple" onClick={handleSubmit} size="sm" >
                <Icon as={MdSend} />
            </Button>
        </CardFooter>
    </Card>

)
}