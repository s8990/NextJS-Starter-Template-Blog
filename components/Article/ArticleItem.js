import Link from "next/link";
import articleStyles from "../../styles/Article.module.css";

export default function ArticleItem({ article }) {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title.toUpperCase()} &rarr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  );
}
