import styles from "./page.module.css";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import Characters from "@/components/Characters";

// const Characters = dynamic(() => import('../components/Characters'), {
//   loading: () => <>loading...</>
// });

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Characters />
    </main>
  );
}
