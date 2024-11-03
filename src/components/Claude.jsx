import {
    Box,
    Heading,
    VStack,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react";

export default function Claude() {
    return (
        <>
            <Box
                height="100vh"
                bgGradient="linear(to-r, #000, #444)" // Dark background for arcade feel
                color="white"
                p="3rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative" // Allows for absolute positioning of arcade elements
            >
                <VStack
                    spacing={6}
                    bg="rgba(0, 0, 0, 0.8)" // Darker background for better contrast
                    p="2rem"
                    borderRadius="lg"
                    boxShadow="0 0 20px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 0, 255, 0.7)"
                    width="70%"
                    maxWidth="800px"
                    textAlign="left"
                    align="start"
                    position="relative"
                >
                    <Heading 
                        fontSize="2xl" 
                        pb="1rem" 
                        style={{
                            textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 0, 255, 0.8)',
                        }}
                    >
                        Curious how the model schedules doctor appointments?
                    </Heading>
                    <iframe
                        width="100%"
                        height="300px"
                        src="https://www.youtube.com/embed/ODaHJzOyVCQ?si=BtIP7RO1_DEa5Wn3"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ 
                            borderRadius: '8px', 
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                            border: '5px solid rgba(255, 215, 0, 0.5)', // Golden border
                        }}
                    ></iframe>
                    <UnorderedList pt="2rem" spacing={3} fontSize="1.1rem" style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                        {['Receive the prompt from the user.',
                        'Check whether the provided information meets the criteria for the steps taken.',
                        'Start operating the computer and load the necessary steps.',
                        'Book the appointment on the website using the provided email.',
                        'Download the appointment PDF and attach it to the calendar.',
                        'Conclude the process by indicating that the program has ended.'].map((step, index) => (
                            <ListItem key={index} style={{ position: 'relative', paddingLeft: '1rem', color: 'cyan', fontFamily: 'ArcadeClassic, sans-serif' }}>
                                <span style={{ 
                                    position: 'absolute', 
                                    left: '0', 
                                    top: '50%', 
                                    transform: 'translateY(-50%)', 
                                    width: '10px', 
                                    height: '10px', 
                                    borderRadius: '50%', 
                                    background: 'cyan',
                                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                                }}></span>
                                Step {index + 1}: {step}
                            </ListItem>
                        ))}
                    </UnorderedList>
                    <Box position="absolute" bottom="10px" left="10px" fontSize="xs" color="gold" style={{ textShadow: '0 0 10px rgba(255, 215, 0, 1)' }}>
                        &lt; Insert Coin to Continue &gt;
                    </Box>
                </VStack>
            </Box>
        </>
    );
}
