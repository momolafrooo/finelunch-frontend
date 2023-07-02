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
import { Role } from "../../services/Endpoints/role/types";
import { RoleApi } from "../../services/Endpoints";
import { queryClient } from "../../pages/_app";

const schema = Yup.object().shape({
  name: Yup.string().required(),
});

interface Props {
  title: string;
  isOpen: boolean;
  role?: Role;
  onClose: () => void;
}

const AddUpdateRole = ({ isOpen, onClose, title, role }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: role,
  });

  const { isLoading, mutate } = useMutation(role ? RoleApi.update : RoleApi.save, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ROLE"] });
      onClose();
    },
  });

  const onSubmit = useCallback(
    (body: Role) => {
      role ? mutate({ ...role, ...body }) : mutate(body);
    },
    [mutate, role]
  );

  return (
    <BaseModal title={title} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput label={"Nom"} placeholder={"Nom"} control={control} name={"name"} />

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

export default AddUpdateRole;
