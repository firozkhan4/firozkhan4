import { Link } from "react-router-dom";
import { ContentList } from "./index";

export default function ContentSection() {
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <section className="flex space-x-4 items-center">
          <h1 className="text-2xl font-bold">Recent blog posts</h1>
          <li>
            <Link
              to={"/blogs"}
              className="text-blue-600 hover:underline text-sm"
            >
              Full archive 👉
            </Link>
          </li>
        </section>
        <p className="text-sm">Things I have written recently.</p>
      </section>
      <section>
        <ContentList
          title={"First blog post"}
          date={"Oct  08,  2022"}
          link={"https://github.com/firozkhan4"}
        />
      </section>
    </div>
  );
}
