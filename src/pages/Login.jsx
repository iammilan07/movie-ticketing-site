import React from "react";
import { Flex, Heading, Input, Button, Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background="gray.formBackground"
        p={12}
        rounded={6}
      >
        <Box paddingTop="15px" h="200px" border="1px" borderColor="gray.400">
          <from>
            <Heading mb={6} textAlign="center">
              Log In
            </Heading>
            <Box>
              <Input
                textAlign="center"
                m="10px"
                w="200px"
                placeholder="Enter your ID"
                variant="filled"
                mb={3}
                type="email"
              />
            </Box>
            <Box textAlign="center" m="10px" w="200px">
              <Input
                textAlign="center"
                placeholder="Enter your password ***"
                variant="filled"
                mb={6}
                type="password"
              />
            </Box>
            <Box alignItems="center" justifyContent="center" textAlign="center">
              <Button mb={6} colorScheme="teal" type="submit">
                Login
              </Button>
            </Box>
          </from>
        </Box>
      </Flex>
    </Flex>
  );
};

export default App;
