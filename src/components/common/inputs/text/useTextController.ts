import { textController, eventHandler } from "../types";

const useTextController: textController = (setValue) => {
    const changeHandler: eventHandler = (event) => {
        setValue(event.target.value);
    }
    return [
        changeHandler
    ]
}

export default useTextController;