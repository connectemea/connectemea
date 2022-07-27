import { addDelayFun } from "./types";

const addDelay: addDelayFun = (setState, value = false, delay = 400) => {
    setTimeout(() => setState(value), delay);
}

export default addDelay;