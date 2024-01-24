import styles from "./photoReports.module.css";
import photoReportsImage from "../img/photoReports.jpeg";

export const PhotoReportsCard = () => {
  return (
    <div className={styles.card}>
      <img
        src={photoReportsImage}
        alt="Korchivnyky and soldiers on the background of cars"
        className={styles.image}
      />
      <p>
        Передали авто для Марії і її взводу аєророзвідки, які працюють на
        Херсонщині.
      </p>
    </div>
  );
};

export default PhotoReportsCard;
