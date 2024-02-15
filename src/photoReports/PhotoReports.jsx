import styles from "./photoReports.module.css";
import PhotoReportsCard from "./PhotoReportsCard";

function PhotoReports() {
  return (
    <div className={styles["main-container"]}>
      <h3 className={styles.title}>Фотозвіти</h3>
      <div className={styles["cards-container"]}>
        <PhotoReportsCard />
        <PhotoReportsCard />
        <PhotoReportsCard />
        <PhotoReportsCard />
        <PhotoReportsCard />
        <PhotoReportsCard />
      </div>
      <div className={styles["more-reports-column"]}>
        <a href="#">Більше звітів</a>
      </div>
    </div>
  );
}

export default PhotoReports;
