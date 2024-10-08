import {
  Box,
  Heading,
  TabPanels,
  Tab,
  Tabs,
  TabPanel,
  TabList,
  Show,
  Hide,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Button,
  Center,
  Image,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";


export default function Portfolio() {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState("WebProjects");

  const handleTabChange = (index, tab) => {
    setTabIndex(index);
    setCurrentTab(tab);
  };

  const tabs_list = [
    "WebProjects",
    "YouTube",
    "Design",
    "Competition",
    "Collaboration"
  ];

  const tabs_panel_list = [
    {
      WebProjects: [
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
          first_icon_url: "https://sabtradelink.com.np/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "https://sabtradelink.com.np/",
        },
        {
          name: "Login /Sign up With Firebase",
          image_url:"https://dipeshpandit.vercel.app/static/media/loginwithfirebase.842a1c40c39db578a3ba.png",
          first_icon_url: "https://loginwithfirebase.vercel.app/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "https://github.com/dipeshpandit12/loginwithfirebase",
        },
        {
          name: "Twin Box - Cloud Storage",
          image_url:"https://dipeshpandit.vercel.app/static/media/twinbox.f9efa4dcb3a567f89fbd.png",
          first_icon_url: "https://twinbox.vercel.app/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "https://github.com/dipeshpandit12/twinbox",
        },
        {
          name: "Little Lemon - Restaurant",
          image_url:"https://dipeshpandit.vercel.app/static/media/littlelemon.e2a5c80d541aab62b1c0.png",
          first_icon_url: "https://littlelemon-gold.vercel.app/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "https://github.com/dipeshpandit12/capstone/tree/master",
        },
        {
          name: "Ghar - Social Group",
          image_url:"https://diwaspandit.com.np/assets/img/portfolio/ghar.jpeg",
          first_icon_url: "https://ghar1.github.io/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "https://github.com/ghar1/ghar1.github.io",
        },
      ],
    },
    {
      YouTube: [
        {
          name: "My Introduction Video",
          image_url:"https://img.youtube.com/vi/EbfHmuuzqUE/sddefault.jpg",
          first_icon:<ViewIcon/>,
          first_icon_name : "Watch",
          first_icon_url: "https://youtu.be/EbfHmuuzqUE",
          // second_icon:<FaGithub/>,
          second_icon_name:"More",
          second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
        },
        {
        name: "Doumentary - History of Simara",
        image_url:"https://diwaspandit.com.np/assets/img/portfolio/video_simara.jpeg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=r8c4ts9tt3c&t=7s",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
      },
      {
        name: "Forest - Cinematic Shot",
        image_url:"https://diwaspandit.com.np/assets/img/portfolio/video_forest.jpeg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=3SA2cleSnsI",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
      },
      {
        name: "A Day in Lockdown - Quarantine life",
        image_url:"https://diwaspandit.com.np/assets/img/portfolio/video_lockdown.jpeg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=GFDvoq9uV0k&t=2s",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
      },
      {
        name: "Bhundol - Vlog",
        image_url:"https://diwaspandit.com.np/assets/img/portfolio/video_bhundol.jpeg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=s6D4zyCzTlA&t=30s",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
      },
      {
        name: "Kalinchowk - Trailer",
        image_url:"https://diwaspandit.com.np/assets/img/portfolio/video_kalinchowk.jpeg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=s6D4zyCzTlA&t=30s",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.youtube.com/watch?v=gL83EFkE-oU",
      },
    ]
    },
    {
      Design: [
        {
        name: "Graphic Design - Posts, Cover photo",
        image_url:"https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/366210858_295768569696721_6993818280493078242_n.png?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=xHxEIlYumNwQ7kNvgGV2xRV&_nc_ht=scontent.fktm7-1.fna&oh=00_AYDC1QYleCBLl9bX-thqkL8IQLLzdXrCOrwczN6wXJeTDQ&oe=6688243A",
        first_icon:<ViewIcon/>,
        first_icon_name : "View",
        first_icon_url: "https://www.facebook.com/sabtradelink",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.facebook.com/sabtradelink",
      },
        {
        name: "Graphic Design - Logo, Cover photo, Brochures",
        image_url:"https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/358389055_112918215190134_2193093887622241493_n.png?stp=dst-png_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=hU1R4wyxRj0Q7kNvgE8keLS&_nc_ht=scontent.fktm10-1.fna&oh=00_AYCcNFmp6dTYvBiYJXTOmBv7fmOAfmbfhM2fJX4AUMp3wA&oe=66880CB6",
        first_icon:<ViewIcon/>,
        first_icon_name : "View",
        first_icon_url: "https://www.facebook.com/kidsfuturejapan",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.facebook.com/kidsfuturejapan",
      },
  ]},

    {
      Competition: [
        {
        name: "Photography Competition - TOP 10",
        image_url:"https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/326259834_760277858947379_2176005957830569072_n.jpg?stp=dst-jpg_s720x720&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6n39eDiVGjEQ7kNvgGfn2CS&_nc_ht=scontent.fktm10-1.fna&oh=00_AYA37vk_M9-Jm0CFNFG5q4sxGI98AuAi585hjtX4JCSAxQ&oe=66883397",
        first_icon:<ViewIcon/>,
        first_icon_name : "View",
        first_icon_url: "https://www.facebook.com/PhotographyLOCUS/posts/pfbid0ZXSbtBe9eR4dYcwCwrxPyRD2TQw1BLRULQPEWNgcYfSC3fuPzFSHK7GBe7kiJwJ6l?rdid=P290yiCZsjdymgho",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://drive.google.com/file/d/1zf1u3r8yp7fXTs6zD8trEs1jk8yAwMQD/view?usp=sharing",
      },
    ]
    },
    {
      Collaboration: [
        {
        name: "International Womens' Day",
        image_url:"https://diwaspandit.com.np/assets/img/portfolio/video_sas.jpeg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=HkrVrO9wWT4&t=120s",
        // second_icon:<FaGithub/>,
        second_icon_name:"Share",
        second_icon_url: "https://www.youtube.com/watch?v=HkrVrO9wWT4&t=120s",
      },
        {
        name: "Timro Maya - Music Video",
        image_url:"https://i.ytimg.com/vi/HKmHjJoGLZI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzxEolpZTTGx4TyzovDS5xIEhbiQ",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=HKmHjJoGLZI",
        // second_icon:<FaGithub/>,
        second_icon_name:"Share",
        second_icon_url: "https://www.youtube.com/watch?v=HKmHjJoGLZI",
      },
        {
        name: "बिरुवा - Short poem",
        image_url:"https://img.youtube.com/vi/rFGsNIzp8XE/sddefault.jpg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=rFGsNIzp8XE&t=54s",
        // second_icon:<FaGithub/>,
        second_icon_name:"Share",
        second_icon_url: "https://www.youtube.com/watch?v=rFGsNIzp8XE&t=54s",
      },
    ]
    },
  ];

  return (
    <Box
      px={{ base: "1rem", md: "1rem", lg: "2rem" }}
      pt="4rem"
      width="100wh"
      pb="4rem"
    >
      <Center>
        <VStack>
          <Heading fontSize="2rem">Portfolio</Heading>
          <Heading fontSize="1rem" fontWeight="100">Feel free to explore my works!</Heading>
          </VStack>
      </Center>
      <Tabs
        index={tabIndex}
        onChange={handleTabChange}
        variant="enclosed"
        mt="3rem"
        px={{ md: "3rem", lg: "5rem", xl: "5rem" }}
      >
        <Show below="md">
          <Menu mx="1rem">
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.400" }}
              _expanded={{ bg: "blue.400" }}
              _focus={{ boxShadow: "outline" }}
            >
              { currentTab || "WebProjects"} <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              {tabs_list.map((tab, index) => (
                <MenuItem key={tab} onClick={() => handleTabChange(index, tab)}>
                  {tab}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Show>
        <Hide below="md">
          <TabList>
            {tabs_list.map((tab) => (
              <Tab key={tab} _selected={{ color: "white", bg: "purple.600" }}>
                {tab}
              </Tab>
            ))}
          </TabList>
        </Hide>
        <TabPanels>
          {tabs_panel_list.map((tab_panel, index) => (
            <TabPanel key={index}>
              <SimpleGrid  columns={{base:1,md:2,lg:3}} minChildWidth="16rem" spacing={6} mt="2rem" align="center">
              
                {Object.keys(tab_panel).map((category) => {
                  const items = tab_panel[category];
                  // Check if the category is an array (like "Web Projects"), otherwise wrap it in an array
                  const itemsArray = Array.isArray(items) ? items : [items];
                  return itemsArray.map((item, itemIndex) => (
                      <Card
                        maxwidth="17rem"
                        bg="white"
                        borderBottom="4px"
                        borderColor="purple.400"
                        key={itemIndex}
                        my="1rem"
                        borderRadius={10}
                        overflow="hidden"
                  >
                    <CardBody p="0"  overflow="hidden">
                      <Center>
                        <Image
                          src={item.image_url}
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
                        <Heading fontSize="0.9rem" alignSelf="start" >{item.name}</Heading>
                        <Divider borderColor="gray.300"/>
                          <Flex flexDirection="row" justifyContent="space-evenly" width="100%" >
                                  <Button
                                    variant="ghost"
                                    leftIcon={item.first_icon}
                                    onClick={() => window.open(item.first_icon_url)}
                                    colorScheme="purple"
                                  >
                                    { item.first_icon_name}
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    leftIcon={item.second_icon}
                                    onClick={() => window.open(item.second_icon_url)}
                                    colorScheme="purple"
                                  >
                                    { item.second_icon_name}
                                  </Button>
                            </Flex>
                      </VStack>
                    </CardFooter>
                  </Card>
                  ));

                })}
                
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
