import { MouseEventHandler, useState } from "react";

const useNavbarController = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navToggle:MouseEventHandler<HTMLDivElement> = () => {setIsOpen(!isOpen)};
    
    return [
        isOpen,
        navToggle,
    ];
}
export default useNavbarController;