import { FormProps } from "./types";
import Wrapper from "./wrapper";
const FormLayout = ({ children, title, description }: FormProps) => {
  return (
    <div className="p-5 pt-[4.5rem] md:px-72 bg-[linear-gradient(45deg,#00dbde,#3aa9e5,#8865f0,#ef0cfd)] bg-[length:200%_200%] animate-gradient h-auto min-h-full">
      <h1
        className="text-4xl text-white font-semibold"
        style={{
          textShadow:
            "0 4px 3px rgb(0 0 0 / 40%), 0 8px 13px rgb(0 0 0 / 10%), 0 18px 23px rgb(0 0 0 / 10%)",
        }}
      >
        {title}
      </h1>
      <h3 className="text-xl text-stone-200 mt-5 font-medium md:w-[50%]">
        {description}
      </h3>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};
export default FormLayout;
