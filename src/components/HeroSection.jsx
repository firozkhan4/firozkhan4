import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function HeroSection() {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <section className="font-semibold space-y-5 ">
      <p className="font-bold text-4xl ">Oh, hello there 👋</p>
      <ul className="space-y-1 text-slate-400">
        <li>
          👨‍🎓 I’m{" "}
          <code className={theme === "dark" ? "text-white" : "text-slate-700"}>
            Firoz Khan
          </code>
          , a 22 year-old university student.
        </li>
        <li>
          👨‍💻 The{" "}
          <code className={theme === "dark" ? "text-white" : "text-slate-700"}>
            Software Developer
          </code>
          , part time philosopher and a lover of all things tech.
        </li>
        <li>
          ⚒️ I mainly work with{" "}
          <code className={theme === "dark" ? "text-white" : "text-slate-700"}>
            Java
          </code>
          ,{" "}
          <code className={theme === "dark" ? "text-white" : "text-slate-700"}>
            JavaScript
          </code>{" "}
          and{" "}
          <code className={theme === "dark" ? "text-white" : "text-slate-700"}>
            C++
          </code>{" "}
          on a daily basis.
        </li>
        <li>🏡 Currently living in the beautiful city of Kota in India.</li>
      </ul>
      <p className="text-slate-400">
        This blog will serve as a home for all my thoughts, notes and
        experiences, ranging from programming to philosophy, web development,
        system design and more. Scroll down and check ‘em out! (I’m currently
        working on importing all my old posts from my other blog and twitter
        threads which will take some time and might break this site from time to
        time, please bear with me.)
      </p>
    </section>
  );
}
