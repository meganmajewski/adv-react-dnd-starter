import styles from "./page.module.css";
import Characters from "../components/Characters";
import Header from "../components/Header";

const Characters = dynamic(() => import('../components/Characters'), {
  loading: () => <>loading...</>
})
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Characters />
    </main>
  );
}
