interface CodeProps {
  codeExample: string;
}

export default function Code({ codeExample }: CodeProps) {
  return (
    <code>
      <pre>{codeExample}</pre>
    </code>
  );
}
