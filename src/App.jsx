import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme="gray">Gray</Button>
        <Button colorScheme={"red"}>red</Button>
        <Button colorScheme={"orange"}>orange</Button>
        <Button colorScheme={"yellow"}>yellow</Button>
        <Button colorScheme={"green"}>green</Button>
        <Button colorScheme={"teal"}>teal</Button>
        <Button colorScheme={"blue"} variant={"ghost"}>
          blue
        </Button>
        <Button colorScheme={"cyan"} variant={"outline"}>
          cyan
        </Button>
        <Button colorScheme={"purple"} variant={"solid"}>
          purple
        </Button>
        <Button colorScheme={"pink"} isLoading={"true"}>
          pink
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
