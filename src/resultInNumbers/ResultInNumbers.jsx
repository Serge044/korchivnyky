import styles from "./resultInNumbers.module.css";
import RusultInNumbersCard from "./RusultInNumbersCard";

const ResultInNumbers = () => {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.title}>Результати в цифрах</h3>
      <div className={styles.numbersContainer}>
        <RusultInNumbersCard />
        <RusultInNumbersCard />
        <RusultInNumbersCard />
      </div>
    </div>
  );
};

export default ResultInNumbers;
