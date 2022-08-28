import { FormControl, FormLabel, Input, Checkbox, Stack, Link, Button } from "@chakra-ui/react";
import { memo, ReactElement } from "react";
import AuthLayout from "../../components/auth-layout";
import { NextPageWithLayout } from "../_app";

const ForgotPassword: NextPageWithLayout = memo(function ForgotPassword() {
  return (
    <>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Saisissez votre email" />
      </FormControl>

      <Button
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        Valider
      </Button>
    </>
  );
});

export default ForgotPassword;

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout title="Mot de passe oublié" subtitle="Saisissez votre email pour recevoir les instructions.">
      {page}
    </AuthLayout>
  );
};
