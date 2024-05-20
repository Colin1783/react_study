import React from "react";
import { Button, ChakraProvider, useToast } from "@chakra-ui/react";

function App(props) {
  const toast = useToast();
  return (
    <ChakraProvider>
      <Button
        onClick={() => {
          toast({
            title: "토스트 제목",
            description: "토스트 내용",
            position: "top-right",
            status: "info",
            isClosable: "top-right",
          });
        }}
      ></Button>
    </ChakraProvider>
  );
}

export default App;
