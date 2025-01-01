import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="title">
        <Link to={"/"} className="">
          Firozkhan4
        </Link>
      </div>
      <div className="nav">Press ":help" for help</div>
    </header>
  );
}
