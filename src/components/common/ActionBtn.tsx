import { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";

interface ActionBtnProps {
  children: ReactNode;
  fgColor?: string;
  bgColor?: string;
  fontSize?: string;
  fontWeight?: string;
  classNames?: string;
  link?: string;
}
const ActionBtn = ({
  children,
  fgColor = "text-white",
  bgColor = "bg-red-grad",
  fontSize = "text-2xl",
  fontWeight = "font-bold",
  classNames,
  link = "/"
}: ActionBtnProps) => {
  return (
    <HashLink
      to={link}
      className={`${bgColor} ${fontSize} ${fontWeight} ${fgColor} ${classNames} text-white py-3 px-8 rounded-[99999px] cursor-pointer uppercase transition-transform hover:scale-110`}
    >
      {children}
    </HashLink>
  );
};
export default ActionBtn;
