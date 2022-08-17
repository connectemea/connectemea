import { useState } from "react";

const useNavbarController = () => {
  const [isOpen, setIsOpen] = useState<boolean>();

  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  return {isOpen, navToggle};
};
export default useNavbarController;
