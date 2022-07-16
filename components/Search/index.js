import { useRef } from "react";
import styles from "./Search.module.css";

export default function Search({ getQuery }) {
  const searchRef = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    getQuery(searchRef.current.value);
  };

  return (
    <>
      <div className={styles.search}>
        <form className={styles.search} onSubmit={(e) => formHandler(e)}>
          <input type='search' autoFocus ref={searchRef} />
          <button>Search</button>
        </form>
      </div>
    </>
  );
}
