import Link from "next/link";
import styles from "../app/page.module.css";

interface Props {
  close: () => void;
}

const Menu = ({ close }: Props) => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <button onClick={close}>close menu</button>
        </li>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/sign-up"}>Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
