import { ReactNode } from "react";

interface ContentProps {
  fontSize?: string;
  align?: string;
  fontWeight?: string;
  classNames?: string;
  children: ReactNode;
}

const Content = ({
  fontSize = "text-xl md:text-2xl",
  align = "text-left",
  fontWeight = "font-light",
  classNames,
  children,
}: ContentProps) => {
  return (
    <p className={`${fontSize} ${align} ${fontWeight} ${classNames}`}>
      {children}
    </p>
  );
};
export default Content;
