import { Dispatch, SetStateAction } from "react";

export type addDelayFun = (setState: Dispatch<SetStateAction<boolean>>, delayHandler: () => void, delay?: number, value?: boolean,) => void;