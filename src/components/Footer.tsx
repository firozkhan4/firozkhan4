import { ForwardedRef, forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotificationStore } from "../stores/notificationStore";
import { useHelpStore } from "../stores/useHelpStore";

interface FooterProps {
  ref: ForwardedRef<HTMLInputElement>;
}

const Footer = forwardRef<HTMLInputElement, FooterProps>((_props, ref) => {
  const { setMessage, notify } = useNotificationStore();
  const {toggleHelp} = useHelpStore()
  const [command, setCommand] = useState("");
  const navigate = useNavigate();

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(command);
      setCommand("");
    }
  };

  const executeCommand = (command: string) => {
    command = command.trim().toLowerCase();

    switch (command) {
      case ":home":
        navigate("/");
        break;
      case ":dsa":
        navigate("/dsa");
        break;
      case ":projects":
        navigate("/projects");
        break;
      case ":articles":
        navigate("/articles");
        break;
      case ":help":
        toggleHelp()
        break;
      default:
        setMessage("Invalid command!");
        notify();
        break;
    }
  };
  return (
    <footer>
      <input
        type="text"
        placeholder="Command"
        id="command-bar"
        className="command"
        autoComplete="off"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleCommand}
        ref={ref}
      />
      <div className="mode">-- NORMAL --</div>
    </footer>
  );
});

export default Footer;
