/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function NotFound() {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box textAlign="center" py={10} px={6}>
        <Heading
          display="inline-block"
          as="h2"
          size="2xl"
          bgGradient="linear(to-r, blue.400, blue.600)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Introuvable
        </Text>
        <Text color={"gray.500"} mb={6}>
          La page que vous recherchez ne semble pas exister.
        </Text>

        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          _hover={{
            bg: "blue.500",
          }}
          color="white"
          variant="solid"
          onClick={goBack}
        >
          Retour
        </Button>
      </Box>
    </Flex>
  );
}
