import { useState } from "react";
const useJoinController = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [department, setDepartment] = useState<string>();
    const [joinYear, setJoinYear] = useState<string>(String(new Date().getFullYear()));

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
    return Handlers;
}
export default useJoinController;