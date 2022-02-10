import Head from "next/head";
import Nav from "../Nav";
import Header from "../Header";
import styles from "../../styles/Layout.module.css";

export default function Home({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}
