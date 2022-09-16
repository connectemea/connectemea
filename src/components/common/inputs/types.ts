import { ChangeEvent } from "react";

interface inputBaseProps {
    label: string;
    value?: string;
    setValue: (arg0: string) => void;
    isError?: string;
    errorMsg?: string;
    helper?:string;
}
export interface textProps extends inputBaseProps {
    placeHolder?: string;
    type?: "text" | "tel" | "year" | "email" | "number";
    limit?: number;

}
export interface selectProps extends inputBaseProps {
    placeHolder?: string;
    options: {
        id?: string;
        value: string;
    }[];
}

//controllers types
export type textController = (setValue: (arg0: string) => void) => ((event: ChangeEvent<HTMLInputElement>) => void)[]

export type eventHandler = (event: ChangeEvent<HTMLInputElement>) => void

export type selectController = (setValue: (arg0: string) => void) => ((event: ChangeEvent<HTMLSelectElement>) => void)[]

export type selectEventHandler = (event: ChangeEvent<HTMLSelectElement>) => void
