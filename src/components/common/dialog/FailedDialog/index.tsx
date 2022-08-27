import { DialogProps } from "../types";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DialogLayout from "../../../layout/dialogLayout";
const FailedDialog = ({
  title,
  description,
  isOpen,
  onCloseHandler,
}: DialogProps) => {
  return isOpen ? (
    <DialogLayout>
      {title && (
        <span className="text-lg text-black mb-3 font-medium">{title}</span>
      )}
      {description && (
        <span className="text-sm text-gray-600 mb-3 text-center md:w-[80%]">
          {description}
        </span>
      )}
      <button
        className="rounded flex items-center justify-center p-2 px-4 bg-green-500 text-white shadow-lg shadowg-red-500/50 transition-transform hover:scale-[1.03]"
        onClick={onCloseHandler}
      >
        Home <ArrowRightAltIcon className="h-5 w-5 text-white ml-1" />
      </button>
    </DialogLayout>
  ) : null;
};
export default FailedDialog;
