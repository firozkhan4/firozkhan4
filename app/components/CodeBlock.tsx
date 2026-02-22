'use client'

import { Clipboard } from "lucide-react";
import React, { useRef } from "react";
import { toast } from "react-toastify";

type Props = React.HTMLAttributes<HTMLPreElement>;


export default function CodeBlock({ children, ...props }: Props) {

  const preRef = useRef<HTMLPreElement>(null);

  const copyCode = async () => {
    try {
      const code = preRef.current?.innerText ?? "";

      await navigator.clipboard.writeText(code);

      toast.success("Code copied!");

    } catch (err) {
      console.error(err);
      toast.error("Copy failed");
    }
  };

  return (
    <div className="relative group">
      <Clipboard size={12} className="absolute right-4 top-4 cursor-pointer" onClick={copyCode} />
      <pre ref={preRef} className="bg-zinc-950 text-zinc-100 p-6 rounded-lg font-mono text-sm overflow-x-auto border border-zinc-800 my-6" {...props} >
        {children}
      </pre>
    </div>
  );
}
