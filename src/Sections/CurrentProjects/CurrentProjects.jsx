import styles from './CurrentProjects.module.css';
import TestCurrentProjectsCard from './CurrentProjectsCard';

const TestCurrentProjects = () => {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Актуальні проєкти</h3>
      <div className={styles['cards-container']}>
        <TestCurrentProjectsCard />
        <TestCurrentProjectsCard />
        <TestCurrentProjectsCard />
      </div>
    </div>
  );
};

export default TestCurrentProjects;
