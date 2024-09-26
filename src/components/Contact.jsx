import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormLabel,Box,Input,Center,Heading,FormControl,Textarea, Button,useToast,VStack } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export default function Contact (){
  // created the State of input to track the changes and errase the data once the form is submitted.
  const [user_name,setUserName]=useState("");
  const [user_email,setUserEmail]=useState("");
  const [message,setMessage]=useState("");
  const [submit,setSubmit]=useState("Send");

  // displaying alert message
  const toast=useToast()
  const showToast=(title,description,status)=>{
    toast({
      title:title,
      description:description,
      duration:5000,
      isClosable:true,
      status:status,
      position:"top",
      icon:<EmailIcon/>
    });
  }

  //  connecting to Email.js
  const form = useRef();
  const sendEmail = (e) => {
     // changing text of Submit from "send" to "sending.."
     setSubmit("Sending...")
    //  prevent page from reload
    e.preventDefault();

    emailjs
      .sendForm('service_rw1ay4m', 'template_jpxy2ka', form.current, {
        publicKey: 'HUm4NaFRztEWXK-54',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // errasing the value of the input and message box
          setUserName("");
          setUserEmail("");
          setMessage("");
          // calling success alert function
          showToast("Email Send","Successfully send the message","success");
          // changing text of Submit to "submit" from "sending...."
          setSubmit("Send")

        },
        (error) => {
          console.log('FAILED...', error.text);
          // calling error alert function
          showToast("Failed to send Email",`${error.text}`,"error");
        },
      );
  };


  return (
<Box
      px={{ base: "1rem", md: "3rem", lg: "5rem" }}
      pt="3rem"
      width="100wh"
      height="100%"
      pb="4rem"
>
    <Center>

        <Box maxW="35rem" minW="20rem">
          <VStack pb="2rem">
            <Heading fontSize="2rem">Let's Talk </Heading>
            <Heading fontSize="1rem" fontWeight="100">I will be Happy to hear from you 😊</Heading>
          </VStack>

          <form ref={form} onSubmit={sendEmail}>
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
                <Input
                  as={Input}
                  placeholder='Full Name'
                  type='text'
                  name='user_name'
                  value={user_name}
                  onChange={(e) => setUserName(e.target.value)}
                  bg="white"
                />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
                <Input
                  as={Input}
                  placeholder='Email'
                  type='email'
                  name="user_email"
                  value={user_email}
                  onChange={(e) => setUserEmail(e.target.value)}
                  bg="white"
                />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
                <Input
                  as={Textarea}
                  placeholder='message'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  bg="white"
                />
            </FormControl>

            <Button
              my="1rem"
              type='submit'
              colorScheme='purple'
              width="100%"
            >
              {submit}
            </Button>
            </form>
        </Box>
    </Center>
    </Box>
  );
}