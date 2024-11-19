import { MarkdownRenderer } from "../components";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { title } = useParams();
  return (
    <div className="container mx-auto w-2/4 overflow-hidden pt-7 space-y-10">
      <MarkdownRenderer filePath={`/src/assets/blogs/${title}.md`} />
    </div>
  );
}
