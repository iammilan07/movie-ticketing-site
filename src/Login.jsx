import React from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
const App = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background="gray.formBackground"
        p={12}
        rounded={6}
      >
        <Heading mb={6}>
          Log in <Switch id="" />
        </Heading>

        <Input placeholder="name" variant="filled" mb={3} type="email" />
        <Input placeholder="******" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal">
          Login
        </Button>
        <Button onClick={toggleColorMode}>Toogle</Button>
      </Flex>
    </Flex>
  );
};

export default App;
