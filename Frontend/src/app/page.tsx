import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.mainCont}>
        <b>Main</b>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
