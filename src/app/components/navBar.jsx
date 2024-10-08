import styles from "./searchbox.module.css";
import { FaSearch } from "react-icons/fa";

export default async function StockNavBar() {
  return (
    <>
      <div className={styles["search-container"]}>
        <input
          type="search"
          name="search-stock"
          id="search-stock"
          placeholder="stock name"
          className={styles["stock-navbar"]}
        />
        <div className={styles["search-btn-container"]}>
          <button className={styles["search-btn"]}>
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
}
