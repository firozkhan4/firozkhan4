import ArticleTitle from "../components/articleui/ArticleTitle";
import Introduction from "../components/articleui/Introduction";
import "../App.css";

const introduction = `Ah, the "Two Sum" problem! It’s the gateway drug to the world of LeetCode. Some say it’s easy, others say it’s their arch-nemesis. To me, it’s the problem that turned me into a detective. Grab your magnifying glass, Watson, because we’re about to dive into some code sleuthing.`;

export default function Two_Sum() {
  return (
    <>
      <article>
        <ArticleTitle title="Two Sum" />
        <Introduction introduction={introduction} />
      </article>
    </>
  );
}
