import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function HeroSection() {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <section className="font-semibold space-y-5 ">
      <p className="font-bold text-4xl ">Oh, hello there 👋</p>
      <ul className="space-y-1 ">
        <li>
          👨‍🎓 I’m{" "}
          <em >
            Firoz Khan
          </em>
          , a 22 year-old university student.
        </li>
        <li>
          👨‍💻 The{" "}
          <em >
            Software Developer
          </em>
          , part time philosopher and a lover of all things tech.
        </li>
        <li>
          ⚒️ I mainly work with{" "}
          <em >
            Java
          </em>
          ,{" "}
          <em >
            JavaScript
          </em>{" "}
          and{" "}
          <em >
            C++
          </em>{" "}
          on a daily basis.
        </li>
        <li>🏡 Currently living in the beautiful city of Kota in India.</li>
      </ul>
      <p >
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
