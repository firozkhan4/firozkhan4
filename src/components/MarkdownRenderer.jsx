import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer({ filePath }) {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        console.log(text);
        setMarkdownContent(text);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMarkdown();
  }, [filePath]);

  return (
    <div className="prose">
      <ReactMarkdown className={"dark:text-white"}>{markdownContent}</ReactMarkdown>
    </div>
  );
}
