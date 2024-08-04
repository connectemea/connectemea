import { NavbarProps } from "../types";
import navLinks from "../../../../const/navLinks";
import { HashLink } from "react-router-hash-link";


const Navbar = ({ hide = false, onClickHandler, isScrolled = true }: NavbarProps) => {
  return (
    <nav
      className={`${hide ? "hidden md:flex" : "flex"
        } flex-col md:flex-row md:flex-1 justify-center w-full mt-3 md:mt-0`}
    >
      {navLinks.map(({ label, href },index) => (
        <HashLink
          key={index}
          smooth
          to={href}
          onClick={onClickHandler}
          className={`p-4 md:ml-4 text-base uppercase font-bold md:font-normal ${isScrolled ? " text-black" : "text-white"} text-left border-b-2 border-gray-700/20 md:border-none mb-3 md:mb-0`}
        >
          {label}
        </HashLink>
      ))
      }
    </nav >
  );
};

export default Navbar;
