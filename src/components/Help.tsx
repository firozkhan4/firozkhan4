import { useHelpStore } from "../stores/useHelpStore";

export default function Help() {
  const helpList = [
    { cmd: ":home", desc: "Navigate to Home Page." },
    { cmd: ":projects", desc: "Navigate to Projects Page." },
    { cmd: ":dsa", desc: "Navigate to DSA Page." },
    { cmd: ":articles", desc: "Navigate to Articles Page." },
  ];

  const { show, toggleHelp } = useHelpStore();

  return (
    <div className={`help ${show ? "active" : ""}`}>
      <h2>Help</h2>
      <div>
        <ul>
          {helpList.map((item, index) => (
            <li key={index}>
              <strong>{item.cmd}</strong> <span>{item.desc}</span>
            </li>
          ))}
        </ul>
        <button onClick={() => toggleHelp()}>Close</button>
      </div>
    </div>
  );
}
