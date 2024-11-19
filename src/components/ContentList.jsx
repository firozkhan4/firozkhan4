import { Link } from "react-router-dom";

export default function ContentList({ title, date, link }) {
  return (
    <div className=" flex  items-center">
      <li></li>
      <p className={`text-sm text-gray-500 tracking-widest `}>{date} :</p>
      <Link
        to={link}
        className="text-blue-600 hover:underline px-4"
      >
        {title}
      </Link>
    </div>
  );
}
