import { ReactNode } from "react";

interface TitleProps {
  fontSize?: string;
  bgColor?: string;
  fgColor?: string;
  align?: string;
  fontWeight?: string;
  classNames?: string;
  children: ReactNode;
}

const Title = ({
  fontSize = "text-4xl md:text-6xl",
  bgColor = "bg-transparent",
  fgColor = "text-black",
  align = "text-left md:text-center",
  fontWeight = "font-bold",
  classNames,
  children,
}: TitleProps) => {
  return (
    <span
      className={`${fontSize} ${bgColor} ${fgColor} ${align} ${fontWeight} ${classNames} px-2 rounded-lg inline-block`}
    >
      {children}
    </span>
  );
};
export default Title;
