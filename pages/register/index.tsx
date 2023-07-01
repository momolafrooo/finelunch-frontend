import { FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo, ReactElement, useCallback } from "react";
import { FcGoogle } from "react-icons/fc";
import Cookies from "js-cookie";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { NextPageWithLayout } from "../_app";
import AuthApi from "../../services/Endpoints/auth";
import { UserRequest } from "../../services/Endpoints/users/types";
import CustomInput from "../../components/custom-input";
import AuthLayout from "../../components/auth-layout";

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirmation: Yup.string().required(),
});

const Register: NextPageWithLayout = memo(function Register() {
  const router = useRouter();

  const { control, handleSubmit } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate } = useMutation(AuthApi.register, {
    onSuccess: ({ data }) => {
      router.push("/");
    },
    onError: (error: any) => {
      // toast({ type: "error", message: error.message });
    },
  });

  const onSubmit = useCallback(
    (authBody: UserRequest) => {
      mutate(authBody);
    },
    [mutate]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label={"Prénom"} placeholder={"Prénom"} control={control} name={"firstName"} />
        <CustomInput label={"Nom"} placeholder={"Nom"} name={"lastName"} control={control} />
        <CustomInput type="email" label={"Email"} placeholder={"Email"} name={"email"} control={control} />
        <CustomInput
          type="text"
          label={"Nom d'utilisateur"}
          placeholder={"Nom d'utilisateur"}
          name={"username"}
          control={control}
        />
        <CustomInput
          type="password"
          label={"Mot de passe"}
          placeholder={"Mot de passe"}
          name={"password"}
          control={control}
        />
        <CustomInput
          type="password"
          label={"Confirmation Mot de passe"}
          placeholder={"Confirmation Mot de passe"}
          name={"passwordConfirmation"}
          control={control}
        />
        <Stack spacing={5}>
          <Button
            type="submit"
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            S'inscrire
          </Button>
        </Stack>
      </form>
    </>
  );
});

export default Register;

Register.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout title="Finelunch" subtitle="commandez en un clic ✌🏽">
      {page}
    </AuthLayout>
  );
};
