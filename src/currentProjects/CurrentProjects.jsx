import styles from "./currentProjects.module.css";
import CurrentProjectsCard from "./CurrentProjectsCard";

const CurrentProjects = () => {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.title}>Актуальні проєкти</h3>
      <CurrentProjectsCard />
      <CurrentProjectsCard />
    </div>
  );
};

export default CurrentProjects;
