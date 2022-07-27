import { addDelayFun } from "./types";

export const addDelay: addDelayFun = (setState) => {
    setTimeout(() => setState(false), 4000);
}