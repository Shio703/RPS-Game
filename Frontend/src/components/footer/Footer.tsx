import Link from "next/link";
import styles from "./footer.module.css";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footerCont}>
      <p>
        @{year}{" "}
        <Link href="https://www.linkedin.com/in/shio-zhamurashvili">
          Shio703
        </Link>
        , All Rights Reserved.
      </p>
      <Link href="https://github.com/Shio703/RPS-Game">Github Repository</Link>
    </footer>
  );
};

export default Footer;