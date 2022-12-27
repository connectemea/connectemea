import { useEffect, useState } from "react";

const useNavbarController = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", getScrollDetails);

    watchScroll();
    return () =>
      window.removeEventListener("scroll", getScrollDetails);
  });

  const getScrollDetails = () => {
    // console.log("called", window.scrollY);
    const top = window.scrollY;
    if (top > 100) setIsScrolled(true);
    else setIsScrolled(false);
  };

  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, navToggle, isScrolled };
};
export default useNavbarController;
