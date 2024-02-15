import styles from "./donationFair.module.css";
import donationFairImage from "../img/donationFair.jpeg";

const DonationFairCard = () => {
  return (
    <div className={styles["card-with-lot"]}>
      <img
        src={donationFairImage}
        alt="Flag with Budanov signature"
        className={styles.image}
      />
      <div className={styles["text-and-btn-container"]}>
        <p>Тубус РПГ-30 від 401 ОСБ</p>
        <a href="#" className={styles["buy-btn"]}>
          Донат 100к грн
        </a>
      </div>
    </div>
  );
};

export default DonationFairCard;
