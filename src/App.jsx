import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box>Lorem ipsum dolor.</Box>
    </ChakraProvider>
  );
}

export default App;
