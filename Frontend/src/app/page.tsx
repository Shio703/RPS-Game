import Image from "next/image";
import styles from "./page.module.css";
import GameContainer from "@/components/gameContainer/GameContainer";

export default function Home() {
  return (
    <>
      <main className={styles.mainCont}>
        <GameContainer />
      </main>
    </>
  );
}
