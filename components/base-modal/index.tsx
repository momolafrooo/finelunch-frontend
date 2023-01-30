import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const BaseModal = (props: Props) => {
  const { isOpen, onClose, children, title } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom" size="xl">
        <ModalOverlay />
        <ModalContent pb={4}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
};
