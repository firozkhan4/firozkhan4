import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";


interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl mt-12 mb-4" {...props} />
        ),
        hr: ({ ...props }) => (
          <hr className="my-12 border-t border-zinc-200 dark:border-zinc-800" {...props} />
        ),
        pre: ({ node, ...props }) => (
          <pre className="bg-zinc-950 text-zinc-100 p-6 rounded-lg font-mono text-sm overflow-x-auto border border-zinc-800" {...props} />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;

