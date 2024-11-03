import {
  Box,
  Heading,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function Claud() {
  return (
    <>
      <Box height="100vh" m="3rem">
        <VStack height="100vh">
          <Heading fontSize="1.5rem" pb="4rem">
            Curious how the model schedules doctor appointments?
          </Heading>
          <iframe
            width="40%"
            height="50%"
            src="https://www.youtube.com/embed/ODaHJzOyVCQ?si=BtIP7RO1_DEa5Wn3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <UnorderedList pt="2rem">
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
