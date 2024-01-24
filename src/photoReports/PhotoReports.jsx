import styles from "./photoReports.module.css";
import PhotoReportsCard from "./PhotoReportsCard";

function PhotoReports() {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.title}>Фотозвіти</h3>
      <div className={styles.cardsContainer}>
        <PhotoReportsCard />
        <PhotoReportsCard />
        <PhotoReportsCard />
        <PhotoReportsCard />
        <PhotoReportsCard />
        <PhotoReportsCard />
      </div>
      <div className={styles.moreReportsColumn}>
        <a href="#">Більше звітів</a>
      </div>
    </div>
  );
}

export default PhotoReports;
