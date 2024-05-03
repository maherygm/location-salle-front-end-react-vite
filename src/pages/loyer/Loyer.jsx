import { Outlet } from "react-router-dom";
import Header from "./layouts/header/Header";

const Loyer = () => {
  return (
    <div className="w-full h-screen bg-zinc-50">
      <Header />
      <Outlet />
    </div>
  );
};

export default Loyer;
