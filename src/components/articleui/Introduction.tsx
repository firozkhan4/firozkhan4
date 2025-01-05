interface IntroductionProps {
  introduction: string;
}
export default function Introduction({ introduction }: IntroductionProps) {
  return (
    <p>
     {introduction}
    </p>
  );
}
