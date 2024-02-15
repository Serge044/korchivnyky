import styles from "./ourTeam.module.css";
import sergeImage from "../img/serge.jpeg";
import instaImage from "../img/іnstagram_icon.png";

const OurTeamCard = () => {
  return (
    <div className={styles.card}>
      <img src={sergeImage} alt="Serge" className={styles.image} />
      <h4 className={styles.name}>Serge Makogon</h4>
      <p className={styles.role}>MR. Terminator</p>
      <p>
        Крутий тіп!
        <br /> Плюси: вміє робити будь що.
        <br /> Мінуси: погано.
      </p>
      <div className={styles["social-links"]}>
        <img src={instaImage} alt="instagram icon" className={styles.links} />
      </div>
    </div>
  );
};

export default OurTeamCard;
