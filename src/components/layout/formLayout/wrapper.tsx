import { WrapperProps } from "./types";
const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="bg-white p-4 rounded my-5 flex flex-col md:pb-5 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.20),0_4px_5px_0px_rgba(0,0,0,0.14),0_1px_10px_0px_rgba(0,0,0,0.12)]">
      {children}
    </div>
  );
};
export default Wrapper;
