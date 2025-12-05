import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.mainCont}>
        <div className={styles.gameCont}>
          <div className="computerResultCont"></div>
          <div className="userResultCont"></div>
        </div>
      </main>
    </>
  );
}
