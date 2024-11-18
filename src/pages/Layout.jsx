import { Outlet } from "react-router-dom";
import { TopNavBar, Footer } from "../components/index";

export default function Layout() {
  return (
    <>
      <TopNavBar />
      <Outlet />
      <Footer />
    </>
  );
}
