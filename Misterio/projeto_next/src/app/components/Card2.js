import styles from "./Card2.module.css";

export default function Card2({ foto, titulo, descricao, alt }) {
  return (
    <div className={styles.Card2Container}>
      <img  className={styles.imagem} src={foto} alt={alt} />

      <div className={styles.textContainer}>
        <h2 className={styles.h2Container}>{titulo}</h2>
        <p className={styles.eu}>{descricao}</p>
      </div>

    </div>
  );
}

