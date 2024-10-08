import Image from "next/image";
import styles from "./page.module.css";
import StockNavBar from "./components/navBar";
export default function Home() {
  return (
    <div className="search-box-container">
      <StockNavBar />
    </div>
  );
}
