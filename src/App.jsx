import React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <label htmlFor="input1">이름</label>
      <input id="input1" type="text" />
      <hr />
      <Center>
        <Box w={{ base: "100%", md: "50%" }}>
          <FormControl>
            <FormLabel htmlFor="input2">이름</FormLabel>
            <Input id="input2" type="text" />
          </FormControl>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
