import { FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo, ReactElement, useCallback } from "react";
import AuthLayout from "../components/auth-layout";
import { NextPageWithLayout } from "./_app";
import { FcGoogle } from "react-icons/fc";
import Cookies from "js-cookie";

const Login: NextPageWithLayout = memo(function Login() {
  const router = useRouter();

  const onSubmit = useCallback(() => {
    Cookies.set("token", "mlmljkmlskjdfmsklfdkjs");
    router.push("/admin/dashboard");
  }, [router]);

  return (
    <>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Mot de passe</FormLabel>
        <Input type="password" />
      </FormControl>
      <Stack spacing={5}>
        <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
          <Checkbox defaultChecked>Rester connecter</Checkbox>
          <Link href="/forgot-password" color={"blue.400"}>
            Mot de passe oublié?
          </Link>
        </Stack>
        <Button
          bg={"blue.400"}
          color={"white"}
          onClick={onSubmit}
          _hover={{
            bg: "blue.500",
          }}
        >
          Connexion
        </Button>
        <Button marginTop={2} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Connexion avec Google</Text>
          </Center>
        </Button>
      </Stack>
    </>
  );
});

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout title="Finelunch" subtitle="commandez en un clic ✌🏽">
      {page}
    </AuthLayout>
  );
};
