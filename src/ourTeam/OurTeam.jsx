import styles from "./ourTeam.module.css";
import OurTeamCard from "./OurTeamCard";

// to do .title-main
function OurTeam() {
  return (
    <div className={styles["main-container"]}>
      <h3 className={styles.title}>Наша команда</h3>
      <div className={styles["card-container"]}>
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
        <OurTeamCard />
      </div>
    </div>
  );
}

export default OurTeam;
