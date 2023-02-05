import { FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo, ReactElement, useCallback } from "react";
import AuthLayout from "../components/auth-layout";
import { NextPageWithLayout } from "./_app";
import { FcGoogle } from "react-icons/fc";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import AuthApi from "../services/Endpoints/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomInput from "../components/custom-input";
import { Login as LoginType } from "../services/Endpoints/auth/types";

const schema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const Login: NextPageWithLayout = memo(function Login() {
  const router = useRouter();

  const { control, handleSubmit } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate } = useMutation(AuthApi.login, {
    onSuccess: ({ data }) => {
      console.log("response", data);
      Cookies.set("token", data?.access_token);
      router.push("/admin/dashboard");
    },
  });

  const onSubmit = useCallback(
    (authBody: LoginType) => {
      mutate(authBody);
    },
    [mutate]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label={"Nom d'utilisateur"}
          placeholder={"Nom d'utilisateur"}
          control={control}
          name={"username"}
        />
        <CustomInput
          type={"password"}
          label={"Mot de passe"}
          placeholder={"Mot de passe"}
          name={"password"}
          control={control}
        />
        <Stack spacing={5}>
          <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
            <Checkbox defaultChecked>Rester connecter</Checkbox>
            <Link href="/forgot-password" color={"blue.400"}>
              Mot de passe oublié?
            </Link>
          </Stack>
          <Button
            type="submit"
            bg={"blue.400"}
            color={"white"}
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
      </form>
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
