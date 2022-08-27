import { ReactNode } from "react";
import { MouseEventHandler } from "react";


export interface inputWrapperProps {
    children: ReactNode;
}
export type checkFilledFun = () => string | undefined;
export type submitHandlerFun = MouseEventHandler<HTMLButtonElement>;