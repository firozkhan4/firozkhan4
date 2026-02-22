'use client';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import CodeBlock from "./CodeBlock";


interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-4xl font-bold mt-16 mb-6 text-zinc-900 dark:text-zinc-100 tracking-tight" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold mt-12 mb-4 text-zinc-800 dark:text-zinc-200" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl font-semibold mt-8 mb-3 text-zinc-800 dark:text-zinc-200" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-lg font-medium mt-6 mb-2 text-zinc-700 dark:text-zinc-300" {...props} />
        ),
        h5: ({ node, ...props }) => (
          <h5 className="text-base font-medium mt-4 mb-2 text-zinc-700 dark:text-zinc-300" {...props} />
        ),
        h6: ({ node, ...props }) => (
          <h6 className="text-sm font-medium mt-4 mb-2 text-zinc-600 dark:text-zinc-400 uppercase tracking-wide" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-base leading-7 mb-4 text-zinc-700 dark:text-zinc-300" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300 transition-colors" {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-semibold text-zinc-900 dark:text-zinc-100" {...props} />
        ),
        em: ({ node, ...props }) => (
          <em className="italic text-zinc-700 dark:text-zinc-300" {...props} />
        ),
        del: ({ node, ...props }) => (
          <del className="line-through text-zinc-500 dark:text-zinc-500" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 my-6 text-zinc-600 dark:text-zinc-400 italic" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-outside ml-6 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-outside ml-6 mb-4 space-y-1 text-zinc-700 dark:text-zinc-300" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="leading-7 pl-1" {...props} />
        ),
        hr: ({ ...props }) => (
          <hr className="my-12 border-t border-zinc-200 dark:border-zinc-800" {...props} />
        ),
        pre: ({ node, ...props }) => (
          <CodeBlock {...props} />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm" {...props} />
          </div>
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-zinc-100 dark:bg-zinc-800" {...props} />
        ),
        tbody: ({ node, ...props }) => (
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700" {...props} />
        ),
        tr: ({ node, ...props }) => (
          <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700" {...props} />
        ),
        img: ({ node, ...props }) => (
          <img className="max-w-full rounded-lg my-6 border border-zinc-200 dark:border-zinc-800" {...props} />
        ),
        input: ({ node, ...props }) => (
          <input className="mr-2 accent-blue-600" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;

