import searchBarStockData from "../backend/api_handler";
import styles from "../searchbox.module.css";
import { FaSearch } from "react-icons/fa";

export default async function StockNavBar() {
  return (
    <>
      <div className={styles["search-container"]}>
        <input
          type="search"
          name="search-stock"
          id="search-stock"
          placeholder="Enter company or the symbol"
          className={styles["stock-search-bar"]}
        />
        <button className={styles["search-btn"]}>
          <FaSearch id="search-icon" />
        </button>
      </div>
    </>
  );
}
