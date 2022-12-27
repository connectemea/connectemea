import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import useNavbarController from "./useNavbarController";
import { Logo } from "../../../assets";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Loader from "../../common/loader";


const HomeLayout = () => {
  const { isOpen, navToggle, isScrolled } = useNavbarController();
  return (
    <div className="w-screen h-screen">
      <Loader/>
      <div id="top" />
      <header
        className={`fixed top-0 left-0 w-full md:my-0 flex flex-col z-20 md:h-auto ${isScrolled || isOpen ? "bg-trans-white backdrop-blur-[20px] backdrop-saturate-[180%] border-b-[1px] border-[rgba(48, 48, 48, 0.125)] border-solid" : "bg-transparent"} ${isOpen ? "h-screen" : "h-auto"
          }`}
      >
        <div className="flex flex-col md:flex-row justify-between md:relative w-full max-w-[1200px] m-0 mx-auto px-4 md:items-center">
          <img src={Logo} alt="connectemea" className="h-[35px] my-4 w-fit" />
          <Navbar hide={true} isScrolled={isScrolled} />
          {isOpen && <Navbar onClickHandler={navToggle} />}
          <div
            className="md:hidden absolute top-[20px] right-[28px]"
            onClick={navToggle}
          >
            {!isOpen ? (
              <MenuIcon className={`!text-3xl ${!isScrolled || isOpen ? "text-white" : "text-black"}`} />
            ) : (
              <CloseIcon className={`!text-3xl text-black`} />
            )}
          </div>
        </div>
      </header>
      <div id="content" className="relative h-full w-full">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
export default HomeLayout;
