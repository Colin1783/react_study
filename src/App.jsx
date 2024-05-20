import React from "react";
import { ChakraProvider, useToast } from "@chakra-ui/react";

function App(props) {
  const toast = useToast();
  return <ChakraProvider></ChakraProvider>;
}

export default App;
