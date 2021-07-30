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
        bgColor="#ffbfb496"
        p="6"
        marginBottom={{ base: "250px", md: "0" }}
      >
        <Heading fontSize="2xl" mb="5">
          Asgard
        </Heading>
        <Text
          color="gray.400"
          fontSize="xl"
          display={{ base: "none", md: "block" }}
        >
          A cloud based community for you to connect to fellow Asgardian's
        </Text>
      </Box>
      <VStack flex="1" bgColor="#fff" paddingY="10" paddingX={{base: '1', md: '16'}}>
        <Heading>Sign up to Asgard</Heading>
        <Text>
          Already have an account? <span>Log in</span>
        </Text>
        <AutoSignup />
        <ManualSignup />
      </VStack>
    </Flex>
  );
}

export default Home;
