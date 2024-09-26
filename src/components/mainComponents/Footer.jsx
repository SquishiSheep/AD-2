import {Box,Center,Heading,HStack,Icon} from "@chakra-ui/react"
import { FaLinkedin, FaGithub} from 'react-icons/fa';

export default function Footer(){

    return(

            <Box px="3rem" my="1rem" maxwidth="100wd">
                <Center>
                    <HStack>
                      <Icon boxSize="1.5rem" as={FaLinkedin} onClick={() => window.open("https://www.linkedin.com/in/dipeshpandit12/")} cursor={"pointer"} _hover={{color:"#0077B5"}}>LInkedin</Icon>
                      <Icon  boxSize="1.5rem" as={FaGithub} onClick={() => window.open("https://github.com/dipeshpandit12/")} cursor={"pointer"} _hover={{color:"gray"}}>Github</Icon>
                      <Heading fontSize="0.95rem" color="#9F7AEA" pl="0.5rem">Dipesh Pandit</Heading>
                    </HStack>
                </Center>
            </Box>
    )
}