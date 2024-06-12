import styles from './CurrentProjects.module.css';
import CurrentProjectsCard from './CurrentProjectsCard';

const TestCurrentProjects = () => {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Актуальний збір</h3>
      <div className={styles['cards-container']}>
        <CurrentProjectsCard />
      </div>
    </div>
  );
};

export default TestCurrentProjects;
