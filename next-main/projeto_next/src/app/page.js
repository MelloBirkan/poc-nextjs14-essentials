import styles from "./page.module.css";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";

export default function Home() {
  return (
    <div className={styles.container}>

    <Card1 
      titulo= "💫   Mistérios Cósmicos   ☄️"  
      descricao="O cosmos é um vasto oceano de mistérios esperando para ser desvendado. Desde as estrelas distantes até os planetas desconhecidos, cada canto do universo guarda segredos que desafiam nossa compreensão e acendem nossa curiosidade.
      Com bilhões de galáxias espalhadas pelo espaço, cada uma repleta de estrelas, planetas e sistemas inteiros, o universo nos convida a explorar suas fronteiras. Há tanto ainda por descobrir: mundos alienígenas orbitando sóis distantes, buracos negros escondidos na escuridão, e até mesmo possibilidades de vida além da Terra." 
      />
    
    <Card2
      foto= "https://i0.wp.com/ecoosfera.com/wp-content/uploads/2022/11/OTXPHDWQRRAEXENIRBLHGREUV4.jpg?resize=750%2C375&ssl=1"
      titulo= "O Misterioso Hexágono de Saturno"
      descricao= "No topo do planeta Saturno, há uma estrutura que intriga cientistas há décadas: um gigantesco e perfeito hexágono formado por correntes de vento. Com mais de 30 mil quilômetros de diâmetro, esse fenômeno surpreende pela sua forma geométrica quase perfeita e pelas cores vibrantes que mudam ao longo das estações. Ninguém sabe exatamente como essa tempestade em forma de hexágono se formou, mas uma coisa é certa: é uma das maiores maravilhas do Sistema Solar. Será que esse padrão geométrico esconde segredos que ainda estão além da nossa compreensão?"
    />

    <Card2
      foto="https://super.abril.com.br/wp-content/uploads/2016/12/galaxia.jpg?quality=70&w=1024&crop=1"
      titulo= "O Enigma da Energia Escura e a Expansão Acelerada do Universo"    
      descricao="A energia escura é uma das maiores incógnitas da cosmologia, composta por cerca de 68% do universo e responsável pela aceleração da sua expansão. Desde a década de 1990, observações de supernovas distantes mostraram que essa expansão não apenas continua, mas está acelerando, levando os cientistas a postularem a existência da energia escura.
      Pesquisadores da colaboração DESI (Dark Energy Spectroscopic Instrument) estão usando um novo espectrógrafo para mapear a distribuição de galáxias e buscar pistas sobre a natureza da energia escura. A pergunta central é se ela é uma forma de energia ou uma propriedade fundamental do espaço-tempo. Novas descobertas podem revelar os segredos da energia escura e mudar nossa compreensão das leis da física e do futuro do universo."
    />


  </div>  
  );
}
