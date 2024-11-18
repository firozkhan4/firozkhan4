import { MarkdownRenderer } from "../components/index";

export default function Blog() {
  return (
    <div className="container mx-auto w-2/4 overflow-hidden pt-7 space-y-10">
      <MarkdownRenderer filePath={"/public/blogs/first.md"} />
    </div>
  );
}
