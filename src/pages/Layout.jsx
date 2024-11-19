import { Outlet } from "react-router-dom";
import { TopNavBar, Footer } from "../components/index";

export default function Layout() {
  return (
    <div className="">
      <TopNavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
