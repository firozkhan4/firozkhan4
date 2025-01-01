import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notification from "../components/Nofification";
import Help from "../components/Help";



export default function Layout() {
  const commandRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.body.addEventListener("keydown", (e) => {
      if (e.key === ":") {
        const cmd = commandRef.current;
        if (cmd) {
          cmd.value = "";
          cmd.focus();
        }
      } else if (e.key === "Escape") {
        document.getElementById("root")?.focus();
      }
    });

    return () => {
      document.body.removeEventListener("keydown", () => {});
    };
  });
  return (
    <>
      <Notification />
      <Help />
      <Header />
      <Outlet />
      <Footer ref={commandRef} />
    </>
  );
}
