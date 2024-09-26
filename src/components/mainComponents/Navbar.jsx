import {Flex,Image,HStack,Heading,Box, Icon,Show,Hide,Menu,MenuButton,MenuItem,MenuList} from "@chakra-ui/react"
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
// import { useState } from "react";
import "./Navbar.css"
import logo from "../mainComponents/logo.png"

export default function Navbar(){

         const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
      ];

    return(
        <Flex as="nav" px={{base:"1rem",lg:"5rem"}}  alignItems="center" justifyContent="space-between">
            <Box>
                <Image
                    borderRadius="full"
                    boxSize="3rem"
                    src={logo}
                    alt='logo'
                />
            </Box>
            <Box>
                <Hide below='md'>
                <HStack>
  {navLinks.map((link, index) => (
    <NavLink key={index} to={link.path} height="100%" activeClassName="active-link"
    exact>
      <Heading
        px="1.5rem"
        size="sm"
        py="1.5rem"
        _hover={{ color: "white", bg: "purple.500" }}
      >
        {link.name}
      </Heading>
    </NavLink>
  ))}
</HStack>

                </Hide>
            </Box>
            <HStack gap={4} py={{base:"1rem"}}>
                <Icon boxSize="2rem" as={FaLinkedin} onClick={() => window.open("https://www.linkedin.com/in/dipeshpandit12/")}cursor={"pointer"} _hover={{color:"#0077B5"}}>LInkedin</Icon>
                <Icon  boxSize="2rem" as={FaGithub} onClick={() => window.open("https://github.com/dipeshpandit12/")}cursor={"pointer"} _hover={{color:"gray"}}>Github</Icon>
                <Show below='md'>
                    <Menu>
                        <MenuButton
                            as={ HamburgerIcon }
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='outline'
                            boxSize="2rem"
                        />
                        <MenuList>
                        {navLinks.map((link, index) => (
                                <NavLink key={index} to={link.path}>
                                    <MenuItem>
                                        <Heading size="md">{link.name}</Heading>
                                    </MenuItem>
                                </NavLink>
                        ))}
                        </MenuList>
                    </Menu>
                </Show>
            </HStack>
        </Flex>
    )
}