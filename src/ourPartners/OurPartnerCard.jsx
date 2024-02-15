import styles from "./ourPartners.module.css";
import huntersGarageImage from "../img/huntersGarage.png";

const OurPartnerCard = () => {
  return (
    <div className={styles.card}>
      <img
        src={huntersGarageImage}
        alt="Hunters Garage"
        className={styles.image}
      />
      <p className={styles["partners-title"]}>Hunters garage</p>
    </div>
  );
};

export default OurPartnerCard;
