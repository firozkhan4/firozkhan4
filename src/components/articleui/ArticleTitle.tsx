import "../../App.css"

interface ArticleTitleProps {
  title: string;
}

export default function ArticleTitle({ title }: ArticleTitleProps) {
  return <h1>{title}</h1>;
}
