import { textProps } from "../types";
import useTextController from "./useTextController";
import { capitalizeFirstLetter, inputLenLimiter } from "../../../../utils";
const Text = ({
  type = "text",
  label,
  placeHolder,
  value,
  setValue,
  isError,
  errorMsg,
  limit,
  helper,
}: textProps) => {
  const [changeHandler] = useTextController(setValue);

  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block text-gray-700 text-sm font-bold mb-2 ml-4"
        htmlFor="text-input"
      >
        {capitalizeFirstLetter(label)}
      </label>
      <input
        className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500/50 focus:border-blue-500/50"
        id="text-input"
        type={type}
        placeholder={placeHolder || `Enter ${label}`}
        value={value}
        onChange={changeHandler}
        onKeyUp={limit ? inputLenLimiter(limit) : undefined}
        maxLength={limit || undefined}
      />
      {isError && (
        <p className="text-red-500 text-xs italic">
          {errorMsg || `invalid ${label}`}
        </p>
      )}
      {helper && (
        <p className="mt-2 ml-4 text-xs text-gray-400">{helper}</p>
      )}
    </div>
  );
};
export default Text;
