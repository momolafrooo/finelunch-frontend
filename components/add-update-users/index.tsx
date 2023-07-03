import React, { useCallback } from "react";
import { BaseModal } from "../base-modal";
import CustomInput from "../custom-input";
import { Button, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useMutation, useQuery } from "react-query";
import UserApi from "../../services/Endpoints/users";
import { User, UserRequest } from "../../services/Endpoints/users/types";
import CustomSelect, { Option } from "../custom-select";
import { RoleApi } from "../../services/Endpoints";
import usePagination from "../../utils/usePagination";
import { queryClient } from "../../pages/_app";

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  username: Yup.string().required(),
  roleId: Yup.string().required(),
});

interface Props {
  title: string;
  isOpen: boolean;
  user?: User;
  onClose: () => void;
}

const AddUpdateUser = ({ isOpen, onClose, title, user }: Props) => {
  const { setPage, setSearch, ...paginationRequest } = usePagination();
  const {
    isLoading: isLoadingList,
    isError,
    data,
    error,
  } = useQuery({
    queryKey: ["ROLE", paginationRequest],
    queryFn: () => RoleApi.findAll(paginationRequest),
    keepPreviousData: true,
    staleTime: 5000,
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: { ...user, roleId: user?.role?.name },
  });

  const { isLoading, mutate } = useMutation(user ? UserApi.update : UserApi.save, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["USER", paginationRequest] });
      onClose();
    },
  });

  const onSubmit = useCallback(
    (body: User) => {
      user
        ? mutate({ ...user, ...body, roleId: body?.roleId === user.role.name ? user.role._id : body?.roleId })
        : mutate(body);
    },
    [mutate, user]
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
        <CustomSelect
          label={"Role"}
          placeholder={"Role"}
          name={"roleId"}
          control={control}
          options={data?.docs?.map((role) => ({ label: role.name, value: role._id })) as Option[]}
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
