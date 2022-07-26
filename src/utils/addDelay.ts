import { addDelayFun } from "./types";

const addDelay: addDelayFun = (setState, delayHandler, delay = 4500, value = false) => {
    setState(true);
    const timeOutHandler = delayHandler ? () => delayHandler() : () => setState(value);
    setTimeout(timeOutHandler, delay);
}

export default addDelay;