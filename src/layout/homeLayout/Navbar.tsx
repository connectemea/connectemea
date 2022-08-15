import { NavbarProps } from "./types";
import NavLink from "./NavLink";
import navLinks from "../../const/navLinks";
const Navbar = ({ hide = false }: NavbarProps) => {
  return (
    <nav
      className={`${
        hide ? "hidden md:flex" : "flex"
      } flex-col md:flex-row md:flex-1 justify-center w-full mt-3 md:mt-0`}
    >
      {navLinks.map(({ label, href }) => (
        <NavLink name={label} link={href} />
      ))}
    </nav>
  );
};

export default Navbar;
