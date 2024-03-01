import styles from "./styles.module.css"

export default function Header(){
  return(
    <div className={styles.card}>
      <span className={styles.titleCard}>Diversidade de Itens</span>
      <span className={styles.qtdCard}>2</span>
    </div>
  )
}