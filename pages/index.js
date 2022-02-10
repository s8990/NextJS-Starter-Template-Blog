import Head from "next/head";
import ArticleList from "../components/Article/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Saeed News - Home</title>
        <meta
          name="keywords"
          content="saeed, european, english,video tutorial"
        />
      </Head>
      <h1>Welcome to Next.js</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
}; // build time

// export const getServerSideProps = async () => {}; // every request

// export const getStaticPaths = async () => {}; // dynamically generate paths
