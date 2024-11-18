import { Link } from "react-router-dom";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function TopNavBar() {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <nav className="border-b-2 border-slate-300 py-1">
      <div className="container mx-auto py-2 px-36 flex items-center justify-between">
        <section className="flex items-center gap-x-4">
          <Link to={"/"} className="text-2xl font-bold font-mono">
            firozkhan4.netlify.app
          </Link>
          <section
            onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
            className="text-2xl"
          >
            {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </section>
        </section>
        <section className="flex items-center gap-x-4 text-xl font-semibold font-mono">
          <Link to={"/blogs"}>Blogs</Link>
        </section>
      </div>
    </nav>
  );
}
