import { FormControl, FormLabel, Input, Checkbox, Stack, Link, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo, ReactElement, useCallback } from "react";
import AuthLayout from "../../components/auth-layout";
import { NextPageWithLayout } from "../_app";

const ResetPassword: NextPageWithLayout = memo(function ResetPassword() {
  const router = useRouter();

  const onSubmit = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <>
      <FormControl id="password">
        <FormLabel>Mot de passe</FormLabel>
        <Input type="password" />
      </FormControl>
      <FormControl id="passwordConfirmation">
        <FormLabel>Confirmation mot de passe</FormLabel>
        <Input type="password" />
      </FormControl>

      <Button
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
        onClick={onSubmit}
      >
        Valider
      </Button>
    </>
  );
});

export default ResetPassword;

ResetPassword.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout title="Réinitialiser Mot de passe" subtitle="Saisissez votre nouveau mot de passe.">
      {page}
    </AuthLayout>
  );
};
