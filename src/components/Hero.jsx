import {
    Box,
    Flex,
    Card,
    Image,
    CardBody,
    Heading,
    CardFooter,
    HStack,
    Button,
    VStack,
    SimpleGrid,
    Divider,
    Center,
  } from "@chakra-ui/react";
  import { FaGithub} from 'react-icons/fa'
  import { ViewIcon } from "@chakra-ui/icons";
import Experience from "./Experience";
import dipeshimage from './Dipesh_Pandit.jpeg';

  export default function Hero() {

    const skills_list = [
      { name: 'HTML', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: 'Javascript', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: 'Python', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: 'Bulma', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bulma/bulma-plain.svg" },
      { name: 'Chakra UI', url: "https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" },
      { name: 'React', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: 'Express JS', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" },
      { name: 'Node JS', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
      { name: 'Typescript', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: 'Mongodb', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: 'Office 365', url: "https://www.e-office.com/__asset?url=/wp-content/uploads/2023/05/365.png" },
      { name: 'Figma', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: 'Filmora', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8JYmEjftoKgi2Jl9kpfOUz6Mnjbeu7iuCg&s" },
      { name: 'Premiere Pro', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg" },
      { name: 'Canva', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
      { name: 'Photoshop', url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
      { name: 'Lightroom', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/1200px-Adobe_Photoshop_Lightroom_CC_logo.svg.png" },
    ];

    const projects_list= [
      {
        name: "Ghar - Social Group",
        image_url:"https://diwaspandit.com.np/assets/img/portfolio/ghar.jpeg",
        demo_url: "https://ghar1.github.io/",
        first_icon:<ViewIcon/>,
        first_icon_name : "Demo",
        second_icon:<FaGithub/>,
        second_icon_name:"Code",
        code_url: "https://github.com/ghar1/ghar1.github.io",
      },
      {
        name: "Hamro Opportunity",
        image_url:"https://diwaspandit.com.np/assets/img/portfolio/web_hamroopportunity_extracurricular.jpeg",
        first_icon_url: "https://hamroopportunity.github.io/",
        first_icon:<ViewIcon/>,
        first_icon_name : "Demo",
        second_icon:<FaGithub/>,
        second_icon_name:"Code",
        second_icon_url: "https://github.com/hamroopportunity/hamroopportunity.github.io",
      },
      {
        name: "Ecommerce Website",
        image_url:"https://diwaspandit.com.np/assets/img/portfolio/sabtrade.jpeg",
        demo_url: "https://sabtradelink.com.np/",
        first_icon:<ViewIcon/>,
        first_icon_name : "Demo",
        second_icon:<FaGithub/>,
        second_icon_name:"Code",
        code_url: "https://sabtradelink.com.np/",
      },
      {
        name: "Login /Sign up With Firebase",
        image_url:"https://dipeshpandit.vercel.app/static/media/loginwithfirebase.842a1c40c39db578a3ba.png",
        demo_url: "https://loginwithfirebase.vercel.app/",
        first_icon:<ViewIcon/>,
        first_icon_name : "Demo",
        second_icon:<FaGithub/>,
        second_icon_name:"Code",
        code_url: "https://github.com/dipeshpandit12/loginwithfirebase",
      },
      {
        name: "Twin Box - Cloud Storage",
        image_url:"https://dipeshpandit.vercel.app/static/media/twinbox.f9efa4dcb3a567f89fbd.png",
        demo_url: "https://twinbox.vercel.app/",
        first_icon:<ViewIcon/>,
        first_icon_name : "Demo",
        second_icon:<FaGithub/>,
        second_icon_name:"Code",
        code_url: "https://github.com/dipeshpandit12/twinbox",
      },
      {
        name: "Little Lemon - Restaurant",
        image_url:"https://dipeshpandit.vercel.app/static/media/littlelemon.e2a5c80d541aab62b1c0.png",
        demo_url: "https://littlelemon-gold.vercel.app/",
        first_icon:<ViewIcon/>,
        first_icon_name : "Demo",
        second_icon:<FaGithub/>,
        second_icon_name:"Code",
        code_url: "https://github.com/dipeshpandit12/capstone/tree/master",
      },
    ]

    const certifications_list=[
      {
        name:"Meta Front-End Developer Certificate",
        image_url:"https://images.credly.com/size/680x680/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png",
        icon: <ViewIcon/>,
        icon_name:"View",
        issue_date:"April 2024",
        url:"https://www.credly.com/badges/62237a9b-2933-441c-9720-4c9186883243/public_url"
      },
      {
        name:"Google IT Support Certificate",
        image_url:"https://images.credly.com/size/680x680/images/fb97a12f-c0f1-4f37-9b7d-4a830199fe84/GCC_badge_IT_Support_1000x1000.png",
        icon:<ViewIcon/>,
        icon_name:"View",
        issue_date:"March 2024",
        url:"https://www.credly.com/badges/08571c03-f250-4392-b285-babddd36da5d/public_url"
      },

    ]

    return (
      <Box
      px={{ base: "1rem", md: "3rem", lg: "7rem" }}
      pt="3rem"
      width="100wh"
      height="100%"
      pb="4rem"
      >
        <VStack >
          <Box height="100%" width="100%">
          <Flex flexDirection={{ base: 'column', md: 'column', lg: 'row', xl: 'row' }}>
              <Box  width="100%" py="2rem" align="center">
                  <Image
                      borderRadius="full"
                      boxSize="15rem"
                      src={dipeshimage}
                      alt='Dipesh image'
                      >
                  </Image>
              </Box>
              <Box  width="100%" pt={{base:"1rem",lg:"3rem"}}  >
                  <Flex flexDirection="column" alignItems={{base:"center",lg:"start"}} >
                    <Heading fontSize="1.4rem" fontWeight={400}>Hey! This is</Heading>
                    <Heading fontSize="2.5rem" >Dipesh Pandit</Heading>
                    <Heading fontSize="1.5rem" fontWeight={400} pt="0.5rem">Front-end Developer</Heading>
                    <HStack pt="2rem">
                      <Button colorScheme="purple" onClick={() => window.open("https://drive.google.com/drive/folders/16wU1QX-SUKB3VuGjO4JYLPmaiBtY0Shb?usp=sharing")}>Resume</Button>
                      <Button colorScheme="purple" onClick={() => window.open("https://www.linkedin.com/in/dipeshpandit12/")}>Linkedin</Button>
                    </HStack>
                  </Flex>
              </Box>
            </Flex>
          </Box>
          <Box height="100%"  width="100%" pt="4rem" px="1rem">
          <HStack>
            <Heading fontSize="1.3rem">My </Heading>
            <Heading fontSize="1.3rem" color="purple.600" fontWeight={700}>Skills</Heading>
          </HStack>
              <Box px="2rem" py="2rem" >

                <SimpleGrid columns={{base:3,md:6,lg:9}} spacing='40px'>
                  {skills_list.map((icon,index)=>(
                    <Box boxSize="4rem" bg="lightcyan" borderRadius="0.8rem" p="0.7rem" key={index}>
                      <Image borderRadius="full"
                          boxSize="2.8rem"
                          src={icon.url}
                          alt={icon.name}
                      />
                    </Box>
                    ))}
                </SimpleGrid>

              </Box>
          </Box>
          <Box height="100%"  width="100%" pt="3rem" px="1rem">
          <HStack>
            <Heading fontSize="1.3rem">My </Heading>
            <Heading fontSize="1.3rem" color="purple.600" fontWeight={700}>Projects</Heading>
          </HStack>
            <Box px="1rem" py="2rem" >
              <SimpleGrid  columns={{base:1,md:2,lg:3}} minChildWidth="16rem" spacing={6}  align="center">
                {projects_list.map((project,index)=>(
                  <Card
                    maxwidth="17rem"
                    bg="white"
                    borderBottom="4px"
                    borderColor="purple.400"
                    key={index}
                    my="1rem"
                    borderRadius={10}
                    overflow="hidden"
                >
                  <CardBody p="0"  overflow="hidden">
                    <Center>
                      <Image
                        src={project.image_url}
                        maxwidth="17rem"
                        height="10rem"
                        transform='scale(1.1)'
                        transition="all .45s ease-in-out"
                        _hover={{transform:'scale(1.3)'}}
                      />
                    </Center>
                  </CardBody>
                  <CardFooter py="1rem" maxwidth="17rem">
                    <VStack width="100%">
                      <Heading fontSize="0.9rem"  alignSelf="start" >{project.name}</Heading>
                      <Divider borderColor="gray.300"/>
                      <Flex flexDirection="row" justifyContent="space-evenly" width="100%" >
                                <Button
                                  variant="ghost"
                                  leftIcon={project.first_icon}
                                  onClick={() => window.open(project.demo_url)}
                                  colorScheme="purple"
                                >
                                  { project.first_icon_name}
                                </Button>
                                <Button
                                  variant="ghost"
                                  leftIcon={project.second_icon}
                                  onClick={() => window.open(project.code_url)}
                                  colorScheme="purple"
                                >
                                  { project.second_icon_name}
                                </Button>
                          </Flex>
                    </VStack>
                  </CardFooter>
                </Card>
                  ))}
              </SimpleGrid>
            </Box>
          </Box>
          <Box height="100%"  width="100%" pt="3rem" px="1rem">
            <HStack>
              <Heading fontSize="1.3rem" >My </Heading>
              <Heading fontSize="1.3rem" color="purple.600" fontWeight={700}>Experience</Heading>
            </HStack>
            <Box height="100%"  width="100%" py="2rem" px="1rem">
              <Experience/>
            </Box>
          </Box>
          <Box height="100%"  width="100%" pt="3rem" px="1rem">
          <HStack>
            <Heading fontSize="1.3rem" >My </Heading>
            <Heading fontSize="1.3rem" color="purple.600" fontWeight={700}>Certifications</Heading>
          </HStack>
              <Box px="1rem" py="2rem" >
                <SimpleGrid columns={1} spacing={5} minChildWidth="15rem">
                  {certifications_list.map((certificate,index)=>(
                    <Box bg="white"  borderRadius="0.8rem" p="0.7rem" key={index} width="100%">
                      <HStack>
                        <Image
                            minW="4rem"
                            maxW="8rem"
                            src={certificate.image_url}
                            alt={certificate.name}
                          />
                        <Flex flexDirection="column" justifyContent="start" >
                          <Heading pb="0.25rem" fontSize={{lg:"1rem",base:"0.8rem"}}>{certificate.name}</Heading>
                          <Button
                            variant="ghost"
                            pl="0"
                            leftIcon={certificate.icon}
                            onClick={() => window.open(certificate.url)}
                            colorScheme="purple"
                          >
                            { certificate.icon_name}
                          </Button>
                        </Flex>
                      </HStack>
                    </Box>
                    ))}
                </SimpleGrid>

              </Box>
          </Box>
          
        </VStack>
      </Box>
    );
  }