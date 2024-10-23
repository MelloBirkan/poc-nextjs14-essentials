import styles from "./Rodape.module.css";

export default function Rodape() {
    return (
        <div className={styles.RodapeContainer}>

<p> Gostou do conteúdo e quer ver mais? Acesse: <a className={styles.rodapeTexto} href="https://www.nasa.gov">Nasa</a></p>

        </div>
    )
    }