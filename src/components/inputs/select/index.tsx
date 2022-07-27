import { selectProps } from "../types";
import useSelectController from "./useSelectController";
import { capitalizeFirstLetter } from "../../../utils";

const Select = ({ label, options, value, setValue }: selectProps) => {
  const [changeHandler] = useSelectController(setValue);

  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="select-input"
      >
        {capitalizeFirstLetter(label)}
      </label>
      <div className="relative">
        <select
          className=" appearance-none w-full bg-white border-2 hover:border-gray-200 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500/50 focus:shadow-blue-500/50"
          id="select-input"
          value={value || "select"}
          onChange={changeHandler}
        >
          <option value="select">Select {label}</option>
          {options.map((option) => (
            <option value={option.value}>{option.value}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Select;
