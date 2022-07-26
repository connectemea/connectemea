import { selectController, selectEventHandler } from "../types";

const useSelectController: selectController = (setValue) => {
    const changeHandler: selectEventHandler = (event) => {
        setValue(event.target.value);
    }
    return [
        changeHandler
    ]
}

export default useSelectController;