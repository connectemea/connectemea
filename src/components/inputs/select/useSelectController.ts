import { selectController, selectEventHandler } from "../types";

const useSelectController: selectController = (setValue) => {
    const changeHandler: selectEventHandler = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return [
        changeHandler
    ]
}

export default useSelectController;