import { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './calender.png'; // Import the background image

const Progress = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editText, setEditText] = useState('');
  const [currentTextElement, setCurrentTextElement] = useState(null);
  const [textPositions, setTextPositions] = useState([
    { top: '10%', left: '10%', text: 'Task 3' },
    { top: '40%', left: '50%', text: 'Task 2' },
    { top: '70%', left: '10%', text: 'Appointment with doctor'},
  ]);
  const navigate = useNavigate();

  const handleTextClick = (text) => {
    setEditText(text);
    setCurrentTextElement(text);
    onOpen();
  };

  const saveText = () => {
    const updatedTexts = textPositions.map(item =>
      item.text === currentTextElement ? { ...item, text: editText } : item
    );
    setTextPositions(updatedTexts);
    setCurrentTextElement(null);
    setEditText('');
    onClose();
  };

  const deleteText = () => {
    const updatedTexts = textPositions.filter(item => item.text !== currentTextElement);
    setTextPositions(updatedTexts);
    setCurrentTextElement(null);
    setEditText('');
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/claude');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      backgroundColor="black"
      position="relative"
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh" // Adjust height to allow space for the button
        width="80vw" // Adjust width as needed
        position="relative"
        backgroundImage={backgroundImage} // Set the background image
        backgroundSize="cover" // Change to cover to fill the box
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        border="5px solid #ff00ff" // Neon border effect
        boxShadow="0 0 20px #ff00ff, 0 0 40px #ff00ff" // Neon glow
        borderRadius="15px" // Rounded corners
      >
        {textPositions.map((item, index) => (
          <Text
            key={index}
            position="absolute"
            pt="1rem"
            color="cyan"
            fontSize="20px" // Larger font size for better visibility
            fontWeight="bold"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)" // Add text shadow for depth
            top={item.top}
            left={item.left}
            onClick={() => handleTextClick(item.text)}
            cursor="pointer"
          >
            {item.text}
          </Text>
        ))}

        {/* Modal for editing and deleting text */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Text</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text color="black" fontWeight="bold">{currentTextElement}</Text>
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Edit text here"
                marginTop="10px"
                borderColor="#ff00ff" // Neon border for input
                focusBorderColor="#ff00ff" // Neon focus border
              />
              <Button colorScheme="green" onClick={saveText} marginTop="10px" variant="outline" borderColor="#00ff00">
                Save
              </Button>
              <Button colorScheme="red" onClick={deleteText} marginTop="10px" variant="outline" borderColor="#ff0000">
                Delete
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>

      {/* Submit Button at the bottom of the Box */}
      <Button
        colorScheme="blue"
        bg="cyan"
        color="black"
        onClick={handleSubmit}
        marginTop="20px"
        variant="outline"
        borderColor="#00ffff" // Neon border
        _hover={{ bg: 'black', color: 'white' }} // Hover effect
        boxShadow="0 0 10px #00ffff, 0 0 20px #00ffff" // Glow effect on hover
      >
        How does this model work?
      </Button>
    </Box>
  );
};

export default Progress;
