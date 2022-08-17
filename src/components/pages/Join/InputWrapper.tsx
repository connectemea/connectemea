import { inputWrapperProps } from "./types";

const InputWrapper = ({ children }: inputWrapperProps) => {
  return <div className="flex flex-col md:flex-row md:mt-5">{children}</div>;
};
export default InputWrapper;
