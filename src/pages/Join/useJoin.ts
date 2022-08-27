import { useState, useMemo, useContext } from "react";
import { submitHandlerFun } from "./types";
import { createMember } from "../../services/memberService";
import { addDelay } from "../../utils";
import { useNavigate } from "react-router-dom";
import loadingContext from "../../context/loadingContext";
import { v4 as uuidv4 } from 'uuid';

const useJoin = () => {
    const navigate = useNavigate();
    const { loaderToggler } = useContext(loadingContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState("");
    const [joinYear, setJoinYear] = useState<string>(String(new Date().getFullYear()));
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const redirectToHome = () => { navigate("/") }

    const submitHandler: submitHandlerFun = async (e) => {
        e.preventDefault();
        loaderToggler(true);
        try {
            const data = {
                id: uuidv4(),
                email,
                name,
                phoneNo: phone,
                department,
                joinYear
            };
            await createMember(data);
            addDelay(setIsSuccess, redirectToHome);

        } catch (err: any) {
            addDelay(setIsError, redirectToHome);
            console.error(err.message);
        }
        loaderToggler(false);

    }

    const checkIsFilled = useMemo(() => {
        const isFilled = (name && email && phone && department && joinYear) ? true : false;
        return isFilled
    }, [name, email, phone, department, joinYear]);

    const dialogToggler = {
        error: {
            get: isError,
            set: redirectToHome
        },
        success: {
            get: isSuccess,
            set: redirectToHome
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
export default useJoin;