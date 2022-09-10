import { FormEvent } from "react";
const inputLenLimiter = (num: number) => (e: FormEvent<HTMLDivElement>) => {
    let InputElement = e.target as HTMLInputElement;
    InputElement.value = Math.max(0, parseInt(InputElement.value))
        .toString()
        .slice(0, num);
}
export default inputLenLimiter;