import styles from "./styles.module.css";

export default function Header() {
  return (
    <header>
      <span className={styles.title}>REACT STOCK</span>
      <div className={styles.divHeader}>
        <span className={styles.spanHeader}>Início</span>
        <span className={styles.spanHeader}>Items</span>
      </div>
    </header>
  );
}
