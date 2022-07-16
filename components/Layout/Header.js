import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <Link href='/'>
        <h1 className={styles.title}>
          <span>YouTube</span> Search App
        </h1>
      </Link>
    </header>
  );
}

export default Header;
