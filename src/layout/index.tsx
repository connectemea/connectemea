import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <div>
      <div>Navbar</div>
      <div className="h-screen">
        <Outlet />
      </div>
    </div>
  );
};
export default HomeLayout;
