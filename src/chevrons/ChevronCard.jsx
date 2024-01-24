import styles from "./chevrons.module.css";
import bureviyShevronImage from "../img/bureviyShevron.png";

const ChevronCard = () => {
  return (
    <div className={styles.card}>
      <img
        src={bureviyShevronImage}
        alt="Bureviy chevron"
        className={styles.image}
      />
      <p>НГУ Буревій</p>
    </div>
  );
};

export default ChevronCard;
