import React from "react";
import {
  ChakraProvider,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Textarea,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <Checkbox>Lorem ipsum.</Checkbox>
      <Checkbox>Necessitatibus, totam.</Checkbox>
      <Checkbox>Consequuntur, doloremque!</Checkbox>
      <Checkbox>Inventore, quas.</Checkbox>
      <hr />
      <RadioGroup>
        <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
      </RadioGroup>
      <hr />
      <Switch />
      <hr />
      <Textarea>Lorem ipsum dolor sit amet, consectetur.</Textarea>
    </ChakraProvider>
  );
}

export default App;
