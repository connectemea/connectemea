import { ReactNode } from "react";
interface BaseProps {
    children: ReactNode;
}

export interface WrapperProps extends BaseProps {
}
export interface FormProps extends BaseProps {
    title: ReactNode;
    description: ReactNode;
}