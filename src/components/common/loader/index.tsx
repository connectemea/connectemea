import { useContext } from "react";
import loadingContext from "../../../context/loadingContext";
const Loader = () => {
  const { isLoading } = useContext(loadingContext);

  return (
    isLoading && (
      <div className="w-screen h-screen fixed top-0 left-0 grid place-items-center bg-gray-500/80 z-[15]">
        <div className="h-[60px] w-[100px] relative">
          {Array.from(Array(5).keys()).map((count) => (
            <div
              className="absolute h-[50px] w-[100px] top-0 left-0 animate-smoothSpin origin-[50%_100%] overflow-hidden "
              style={{ animationDelay: `-${50 + 50 * count}ms` }}
            >
              <div
                className={`absolute right-0 left-0 my-0 mx-auto border-4 border-white rounded-[100%]`}
                style={{
                  height: `${90 - count * 14}px`,
                  width: `${90 - count * 14}px`,
                  top: `${7 + count * 7}px`,
                  borderColor: `hsl(${count * 60}, 40%, 50%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Loader;
