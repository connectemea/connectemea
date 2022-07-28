import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import useNavbarController from "./useNavbarController";
const HomeLayout = () => {
  const [isOpen, navToggle] = useNavbarController();
  return (
    <div className="w-screen">
      <nav className="fixed top-0 left-0 w-full flex flex-col h-screen md:h-[50px] z-10">
        <div className="flex flex-col md:flex-row justify-between md:relative">
          <h3>Logo</h3>
          <Navbar hide={true}/>
          {isOpen && <Navbar />}
          <div
            className="md:hidden absolute top-[5px] right-[10px]"
            onClick={navToggle}
          >
            {isOpen ? "close" : "open"}
          </div>
        </div>
      </nav>
      <div className="pt-[50px]">
        <Outlet />
      </div>
    </div>
  );
};
export default HomeLayout;
