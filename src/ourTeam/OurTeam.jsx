import styles from "./ourTeam.module.css";
import OurTeamCard from "./OurTeamCard";

function OurTeam() {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.title}>Наша команда</h3>
      <div className={styles.cardContainer}>
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
