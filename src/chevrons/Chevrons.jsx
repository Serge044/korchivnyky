import styles from "./chevrons.module.css";
import ChevronCard from "./ChevronCard";

function Chevrons() {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.title}>Реалізація співпраці у шевронах</h3>
      <p>Ми надали допомогу героям з цих бригад, які виборюють нашу свободу:</p>

      <div className={styles.cardsContainer}>
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
        <ChevronCard />
      </div>
    </div>
  );
}

export default Chevrons;
