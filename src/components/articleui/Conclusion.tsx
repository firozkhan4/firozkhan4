interface ConclusionProps {
  conclusion: string;
}

export default function Conclusion({ conclusion }: ConclusionProps) {
  return (
    <>
      <h2>Conclusion</h2>
      <p>{conclusion}</p>
    </>
  );
}
