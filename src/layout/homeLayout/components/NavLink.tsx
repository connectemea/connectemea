import { NavLinkProps } from "../types";
import { HashLink } from "react-router-hash-link";

const NavLink = ({ name, link ,onClickHandler}: NavLinkProps) => {
  return (
    <HashLink
      smooth
      to={link}
      onClick={onClickHandler}
      className="p-4 md:ml-4 text-base uppercase font-bold md:font-normal text-black text-left border-b-2 border-gray-700/20 md:border-none mb-3 md:mb-0"
    >
      {name}
    </HashLink>
  );
};
export default NavLink;
