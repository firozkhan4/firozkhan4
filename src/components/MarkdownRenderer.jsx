import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

export default function MarkdownRenderer({ filePath }) {
  const [markdownContent, setMarkdownContent] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        const text = await response.text();
        setMarkdownContent(text);
        setError(null); // Reset error if successful
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchMarkdown();
  }, [filePath]);

  return (
    <div className="prose overflow-scroll pt-10">
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <ReactMarkdown className="dark:text-white">{markdownContent}</ReactMarkdown>
      )}
    </div>
  );
}

