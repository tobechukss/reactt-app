import React from "react";
import { Box, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react";
import ManualSignup from "./components/Manualsignup";
import AutoSignup from "./components/AutoSignup";
import mainImg from './Assets/banner-image.png'




function Home() {
  return (

    
    <Flex
    maxW="100vw"
    minHeight="100vh"
    flexDirection={{ base: "column", md: "row" }}
   
    
    >
    <img src={mainImg} alt="" className="mainImg"/>

        <Box
        width={{ base: "100%", md: "35%" }}
        bgColor="#FAF6F5"
        p="5"
        paddingBottom={{ base: "250px", md: "0" }}
      >
    
        <Heading fontSize={{base:"4xl"}} mb="5" ml="20" mt="10" fontWeight="700">
          Asgard
        </Heading>
        <Text
          color="gray.400"
          fontSize="2xl"
          display={{ base: "none", md: "block" }}
          maxWidth="450px"
          ml="20"
          
        >
          A cloud based community for you to connect to fellow Asgardian's
        </Text>
        </Box>
        
        <VStack flex="1" bgColor="#fff" paddingY="0" ml="20" mt="40" align="left" paddingX={{base: '1', md: '16'}}>
        <Heading fontWeight="500">Sign up to Asgard</Heading>
        <Text fontWeight="500" color="gray.400">
          Already have an account? <Box as="span" color="blue">Log in</Box>
        </Text>
        <AutoSignup />
        <p className="condition">OR</p>
        <ManualSignup />
      </VStack>
      
    </Flex>
    


  


    
  );
}

export default Home;
