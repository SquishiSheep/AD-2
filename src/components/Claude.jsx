import { Box, Heading, VStack, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Claud() {
  return (
    <>
      <Box height="100vh" m="3rem">
        <VStack height="100vh">
          <Heading fontSize="xl" pb="4rem">
            Curious how the model schedules doctor appointments? Click here to
            learn more!{" "}
          </Heading>
          <iframe
            width="50%"
            height="50%"
            src="https://www.youtube.com/embed/ODaHJzOyVCQ?si=BtIP7RO1_DEa5Wn3"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <UnorderedList pt="2rem">
            <ListItem>Step 1: Patient submits an appointment request.</ListItem>
            <ListItem>Step 2: Model processes the request and checks availability.</ListItem>
            <ListItem>Step 3: Model suggests available time slots to the patient.</ListItem>
            <ListItem>Step 4: Patient selects a preferred time slot.</ListItem>
            <ListItem>Step 5: Confirmation of the appointment is sent to both patient and doctor.</ListItem>
          </UnorderedList>
        </VStack>
      </Box>
    </>
  );
}
