import styles from "./Card1.module.css";

export default function Card1({titulo, descricao}) {
return (
    <div className={styles.Card1Container}>
        <h1>{titulo}</h1>
        <p className={styles.textoContainer}> {descricao}</p>
    </div>
)
}





