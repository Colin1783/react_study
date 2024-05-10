import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme="blue">Button</Button>
        <Button colorScheme="orange">Button</Button>
        <Button
          sx={{
            color: "skyblue",
            fontSize: "40px",
            padding: "20px",
          }}
          colorScheme={"gray"}
        >
          클릭
        </Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
