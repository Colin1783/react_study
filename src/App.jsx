import React from "react";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";

function App(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return <ChakraProvider></ChakraProvider>;
}

export default App;
