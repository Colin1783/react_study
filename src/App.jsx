import React from "react";
import { Box, Center, ChakraProvider, Flex, Spacer } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Flex justify={"space-between"}>
        <Box bgColor={"blue"}>1</Box>
        <Box bgColor={"orange"}>2</Box>
        <Box bgColor={"yellow"}>3</Box>
      </Flex>

      <Flex>
        <Spacer>
          <Box bgColor={"green"}>1</Box>
          <Box bgColor={"gold"}>2</Box>
        </Spacer>
        <Box bgColor={"green"}>3</Box>
      </Flex>
      <hr />
      <Center>
        <Box w={{ base: "100%", md: "5ppp" }} bgColor={"linen"}>
          content
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
