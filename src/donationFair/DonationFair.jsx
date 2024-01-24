import styles from "./donationFAIR.module.css";
import DonationFairCard from "./DonationFairCard";

const DonationFair = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Донатний ярмарок</h3>
        <p>
          Тут ви маєте можливість придбати унікальні трофеї від українських
          військових, які відстоюють нашу свободу та незалежність.
          <br />
          Ваша підтримка не лише збереже частину історії наших героїв, але й
          допоможе забезпечити необхідне обладнання для перемоги України
        </p>
      </div>
      <DonationFairCard />
      <DonationFairCard />
    </div>
  );
};

export default DonationFair;
