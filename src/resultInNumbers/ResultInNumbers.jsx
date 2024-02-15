import styles from "./resultInNumbers.module.css";
import RusultInNumbersCard from "./RusultInNumbersCard";

const ResultInNumbers = () => {
  return (
    <div className={styles["main-container"]}>
      <h3 className={styles.title}>Результати в цифрах</h3>
      <div className={styles["numbers-container"]}>
        <RusultInNumbersCard />
        <RusultInNumbersCard />
        <RusultInNumbersCard />
      </div>
    </div>
  );
};

export default ResultInNumbers;
