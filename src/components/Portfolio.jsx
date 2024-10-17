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
          image_url:"hamro_opportunity.jpg",
          first_icon_url: "https://hamroopportunity.github.io/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "https://github.com/hamroopportunity/hamroopportunity.github.io",
        },
        {
          name: "Ecommerce Website",
          image_url:"sab_trade.jpg",
          first_icon_url: "https://sabtradelink.com.np/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "/",
        },
        {
          name: "Login /Sign up With Firebase",
          image_url:"login.jpg",
          first_icon_url: "https://loginwithfirebase.vercel.app/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "https://github.com/dipeshpandit12/loginwithfirebase",
        },
        {
          name: "Twin Box - Cloud Storage",
          image_url:"twin_box.jpg",
          first_icon_url: "https://twinbox.vercel.app/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "https://github.com/dipeshpandit12/twinbox",
        },
        {
          name: "Little Lemon - Restaurant",
          image_url:"little_lemon.jpg",
          first_icon_url: "https://littlelemon-gold.vercel.app/",
          first_icon:<ViewIcon/>,
          first_icon_name : "Demo",
          second_icon:<FaGithub/>,
          second_icon_name:"Code",
          second_icon_url: "https://github.com/dipeshpandit12/capstone/tree/master",
        },
        {
          name: "Ghar - Social Group",
          image_url:"ghar.jpg",
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
          image_url:"intro.jpg",
          first_icon:<ViewIcon/>,
          first_icon_name : "Watch",
          first_icon_url: "https://youtu.be/EbfHmuuzqUE",
          // second_icon:<FaGithub/>,
          second_icon_name:"More",
          second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
        },
        {
        name: "Doumentary - History of Simara",
        image_url:"video_simara.jpg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=r8c4ts9tt3c&t=7s",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
      },
      {
        name: "Forest - Cinematic Shot",
        image_url:"video_forest.jpg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=3SA2cleSnsI",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
      },
      {
        name: "A Day in Lockdown - Quarantine life",
        image_url:"video_lockdown.jpg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=GFDvoq9uV0k&t=2s",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
      },
      {
        name: "Bhundol - Vlog",
        image_url:"video_bhundol.jpg",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=s6D4zyCzTlA&t=30s",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.youtube.com/@DDTwinsVlog",
      },
      {
        name: "Kalinchowk - Trailer",
        image_url:"video_kalinchowk.jpg",
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
        image_url:"/",
        first_icon:<ViewIcon/>,
        first_icon_name : "View",
        first_icon_url: "https://www.facebook.com/sabtradelink",
        // second_icon:<FaGithub/>,
        second_icon_name:"More",
        second_icon_url: "https://www.facebook.com/sabtradelink",
      },
        {
        name: "Graphic Design - Logo, Cover photo, Brochures",
        image_url:"/",
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
        image_url:"/",
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
        image_url:"/",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=HkrVrO9wWT4&t=120s",
        // second_icon:<FaGithub/>,
        second_icon_name:"Share",
        second_icon_url: "https://www.youtube.com/watch?v=HkrVrO9wWT4&t=120s",
      },
        {
        name: "Timro Maya - Music Video",
        image_url:"/",
        first_icon:<ViewIcon/>,
        first_icon_name : "Watch",
        first_icon_url: "https://www.youtube.com/watch?v=HKmHjJoGLZI",
        // second_icon:<FaGithub/>,
        second_icon_name:"Share",
        second_icon_url: "https://www.youtube.com/watch?v=HKmHjJoGLZI",
      },
        {
        name: "बिरुवा - Short poem",
        image_url:"/",
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
                          src={`/images/${item.image_url}`}
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
