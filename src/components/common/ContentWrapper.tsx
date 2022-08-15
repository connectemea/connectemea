import { ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
  id?:string;
}
const ContentWrapper = ({ children,id }: ContentWrapperProps) => {
  return (
    <section id={id} className="w-full max-w-[1200px] m-0 mx-auto px-6 py-20">
      {children}
    </section>
  );
};
export default ContentWrapper;
