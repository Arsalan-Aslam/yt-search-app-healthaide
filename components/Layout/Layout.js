import styles from "./Layout.module.css";
import Header from "./Header";

function Layout(props) {
  return (
    <div className={styles.main}>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
