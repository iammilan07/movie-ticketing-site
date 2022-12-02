import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box textAlign="center" alignItems="baseline">
      <Text fontSize="2xl" paddingBottom="5px">
        A movie app using react redux.
      </Text>
      <Text fontSize="xl">Made with ❤️ by Milan Pandey</Text>
    </Box>
  );
};

export default Footer;
