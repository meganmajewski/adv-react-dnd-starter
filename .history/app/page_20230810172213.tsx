import styles from "./page.module.css";
import Characters from "../components/Characters";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Characters />
    </main>
  );
}
