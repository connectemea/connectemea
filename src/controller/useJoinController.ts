import { useState, useMemo } from "react";
import { submitHandlerFun } from "./types";
const useJoinController = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState("");
    const [joinYear, setJoinYear] = useState<string>(String(new Date().getFullYear()));
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const submitHandler: submitHandlerFun = (e) => {
        e.preventDefault();
        console.log(name, email, phone, department, joinYear);
    }

    const checkIsFilled = useMemo(() => {
        const isFilled = (name && email && phone && department && joinYear) ? true : false;
        return isFilled
    }, [name, email, phone, department, joinYear]);

    const dialogToggler = {
        error: {
            get: isError,
            set: () => { setIsError(false) }
        },
        success: {
            get: isSuccess,
            set: () => setIsSuccess(false)
        }
    }

    const Handlers = {
        name: {
            state: name,
            setState: setName
        },
        email: {
            state: email,
            setState: setEmail
        },
        phone: {
            state: phone,
            setState: setPhone
        },
        department: {
            state: department,
            setState: setDepartment
        },
        join: {
            state: joinYear,
            setState: setJoinYear
        },
    }
    return { Handlers, submitHandler, checkIsFilled, dialogToggler };
}
export default useJoinController;