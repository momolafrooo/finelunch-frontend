import React, { useCallback } from "react";
import { BaseModal } from "../base-modal";
import CustomInput from "../custom-input";
import { Button, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation } from "react-query";
import UserApi from "../../services/Endpoints/users";
import { UserRequest } from "../../services/Endpoints/users/types";

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirmation: Yup.string().required(),
});

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const AddUpdateUser = ({ isOpen, onClose, title }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  const { isLoading, mutate } = useMutation(UserApi.save);

  const onSubmit = useCallback(
    (body: UserRequest) => {
      mutate(body);
    },
    [mutate]
  );

  return (
    <BaseModal title={title} isOpen={isOpen} onClose={onClose}>
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

        <Stack direction="row" justifyContent="flex-end">
          <Button variant="ghost" onClick={onClose} mr={3}>
            Annuler
          </Button>
          <Button colorScheme="blue" type="submit">
            Enregistrer
          </Button>
        </Stack>
      </form>
    </BaseModal>
  );
};

export default AddUpdateUser;
