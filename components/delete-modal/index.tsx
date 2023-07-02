import React from "react";
import { BaseModal } from "../base-modal";
import { Button, Stack } from "@chakra-ui/react";

interface Props {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const DeleteModal = ({ isOpen, onClose, title, onSubmit }: Props) => {
  return (
    <BaseModal title={title} isOpen={isOpen} onClose={onClose}>
      <div>Voulez vous vraiment supprimer cet element ?</div>
      <Stack direction="row" justifyContent="flex-end">
        <Button variant="ghost" onClick={onClose} mr={3}>
          Non
        </Button>
        <Button colorScheme="red" type="submit" onClick={onSubmit}>
          Oui
        </Button>
      </Stack>
    </BaseModal>
  );
};

export default DeleteModal;
