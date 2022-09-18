import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  id?:string;
  classNames?:string;
}
const ContentWrapper = ({ children,id,classNames }: ContentWrapperProps) => {
  return (
    <section id={id} className={`w-full max-w-[1200px] m-0 mx-auto px-6 py-8 ${classNames}`}>
      {children}
    </section>
  );
};
export default ContentWrapper;
