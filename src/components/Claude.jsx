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
                    width="70%"
                    maxWidth="800px"
                    textAlign="left"
                    align="start"
                >
                    <Heading fontSize="2xl" pb="1rem">
                        Curious how the model schedules doctor appointments?
                    </Heading>
                    <iframe
                        width="100%"
                        height="300px"
                        src="https://www.youtube.com/embed/ODaHJzOyVCQ?si=BtIP7RO1_DEa5Wn3"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)' }}
                    ></iframe>
                    <UnorderedList pt="2rem" spacing={3} fontSize="1.1rem">
                        <ListItem>Step 1: Receive the prompt from the user.</ListItem>
                        <ListItem>
                            Step 2: Check whether the provided information meets the criteria
                            for the steps taken.
                        </ListItem>
                        <ListItem>
                            Step 3: Start operating the computer and load the necessary steps.
                        </ListItem>
                        <ListItem>
                            Step 4: Book the appointment on the website using the provided
                            email.
                        </ListItem>
                        <ListItem>
                            Step 5: Download the appointment PDF and attach it to the
                            calendar.
                        </ListItem>
                        <ListItem>
                            Step 6: Conclude the process by indicating that the program has
                            ended.
                        </ListItem>
                    </UnorderedList>
                </VStack>
            </Box>
        </>
    );
}
