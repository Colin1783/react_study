import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Box m={1} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={2} bgColor={"tomato"}>
        Lorem ipsum dolor.
      </Box>
      <Box m={10} bgColor={"tomato"}>
        Cumque, omnis tempore.
      </Box>
      <Box m={20} bgColor={"tomato"}>
        A, fugit, quas.
      </Box>
    </ChakraProvider>
  );
}

export default App;
