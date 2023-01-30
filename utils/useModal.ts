import { useCallback, useState } from "react";

export function useModal<T>(id?: number): UseModal<T> {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<T>();

  const onShowModal = useCallback(
    (item?: T) => () => {
      setShowModal(true);
      item && setSelectedItem(item);
    },
    []
  );

  const onCloseModal = useCallback(
    (item?: T) => () => {
      setShowModal(false);
      item && setSelectedItem(item);
    },
    []
  );

  return {
    showModal,
    onShowModal,
    onCloseModal,
    selectedItem,
  };
}

export interface UseModal<T> {
  showModal: boolean;
  onShowModal: (item?: T) => () => void;
  onCloseModal: (item?: T) => () => void;
  selectedItem?: T;
}
