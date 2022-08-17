import { textProps } from "../types";
import useTextController from "./useTextController";
import { capitalizeFirstLetter } from "../../../../utils";
const Text = ({
  type = "text",
  label,
  placeHolder,
  value,
  setValue,
  isError,
  errorMsg,
  limit,
}: textProps) => {
  const [changeHandler] = useTextController(setValue);

  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="text-input"
      >
        {capitalizeFirstLetter(label)}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500/50 focus:border-blue-500/50"
        id="text-input"
        type={type}
        placeholder={placeHolder || `Enter ${label}`}
        value={value}
        onChange={changeHandler}
        maxLength={limit || undefined}
      />
      {isError && (
        <p className="text-red-500 text-xs italic">
          {errorMsg || `invalid ${label}`}
        </p>
      )}
    </div>
  );
};
export default Text;
