import styles from "./ourСommunity.module.css";
import ladaImage from "../img/Lada.jpeg";
import instaImage from "../img/іnstagram_icon.png";

const OurCommunityCard = () => {
  return (
    <div className={styles.card}>
      <img src={ladaImage} alt="Lada cat" className={styles.image} />
      <div>
        <p>Lada The Cat </p>
        <div className={styles.nameAndLinkContainer}>
          <img src={instaImage} alt="Instagram icon" className={styles.insta} />
          <a href="#">lada_the_cat</a>
        </div>
      </div>
    </div>
  );
};

export default OurCommunityCard;
