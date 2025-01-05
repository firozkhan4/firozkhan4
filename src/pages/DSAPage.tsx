import { useParams } from "react-router-dom";
import dsa from "../assets/data/dsa.json";
import Two_Sum from "../articles/Two_Sum";

const ArticleComponents: Record<string, React.FC> = {
  two_sum: Two_Sum,
};

export default function DSAPage() {
  const { id } = useParams();
  const articleKey = dsa[Number(id)];

  if (!articleKey || !ArticleComponents[articleKey]) {
    return <h1>Article Not Found</h1>;
  }

  const ArticleComponent = ArticleComponents[articleKey];
  return <ArticleComponent />;
}
