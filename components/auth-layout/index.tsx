import { Flex, Box, Stack, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React, { memo } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default memo(function AuthLayout(props: Props) {
  const { title, subtitle, children } = props;
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} w={"100%"} maxW={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>{title}</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            {subtitle}
          </Text>
        </Stack>
        <Box w={"100%"} rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>{children}</Stack>
        </Box>
      </Stack>
    </Flex>
  );
});
