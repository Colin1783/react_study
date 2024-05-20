import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <div
        style={{
          padding: "10px",
          margin: "10px",
          border: "1px solid black",
          backgroundColor: "lightgray",
          borderRadius: "10px",
        }}
      >
        Lorem ipsum dolor.
      </div>
      <Box
        p={"10px"}
        m={"20px"}
        border={"1px solid black"}
        bgColor={"tomato"}
        borderRadius={"5px"}
      >
        Lorem ipsum dolor.
      </Box>

      <Box bgColor={"orange.50"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.100"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.200"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.300"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.400"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.500"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.600"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.700"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.800"}>Lorem ipsum dolor.</Box>
      <Box bgColor={"orange.900"}>Lorem ipsum dolor.</Box>
      <hr />
      <Box m={"10px"}>Lorem ipsum dolor.</Box>
      <Box mr={"100px"}>Id, tenetur, voluptates?</Box>
      <Box mx={"10px"}>Dolor, sit ut.</Box>
      <Box mt={"20px"}>Accusamus, beatae, voluptatibus.</Box>
      <Box ml={"30px"}>A officiis, tempora.</Box>
      <Box my={"15px"}>Eum, iste reiciendis.</Box>
      <Box>Eos, id recusandae.</Box>
      <hr />
      <Box p={"10px"}>Lorem ipsum dolor.</Box>
      <Box pr={"20px"}>Id, tenetur, voluptates?</Box>
      <Box px={"30px"}>Dolor, sit ut.</Box>
      <Box pb={"40px"}>Accusamus, beatae, voluptatibus.</Box>
      <Box pl={"50px"}>A officiis, tempora.</Box>
      <Box py={"60px"}>Eum, iste reiciendis.</Box>
      <hr />
      <Box w={"500px"}>Lorem ipsum dolor.</Box>
      <Box h={"500px"}>Hic, rerum saepe.</Box>
    </ChakraProvider>
  );
}

export default App;
