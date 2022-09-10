import { ReactNode } from "react";
import { MouseEventHandler } from "react";


export interface inputWrapperProps {
    children: ReactNode;
}
export type checkFilledFun = () => string | undefined;
export type submitHandlerFun = MouseEventHandler<HTMLButtonElement>;

export interface MemberType {
    records: {
        id: string;
        createdTime: string;
        fields: {
            department: string;
            email: string;
            phoneNo: string;
            joinYear: string;
            name: string;
            id: string;
        }
    }[]
}