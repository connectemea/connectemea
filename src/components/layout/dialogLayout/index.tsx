import { dialogProps } from "./types";

const DialogLayout = ({ children }: dialogProps) => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-gray-500/80 grid place-items-center z-20">
      <div className="text-white bg-white p-8 max-w-[75%] md:w-[30%] flex flex-col justify-center items-center rounded-lg shadow-[0_2px_4px_-1px_rgba(0,0,0,0.20),0_4px_5px_0px_rgba(0,0,0,0.14),0_1px_10px_0px_rgba(0,0,0,0.12)] relative">
        {children}
      </div>
    </div>
  );
};
export default DialogLayout;
