import styles from './HowToHelpUs.module.css';
import TestHowToHelpUsCard from './HowToHelpUsCard';

const TestHowToHelpUs = () => {
  return (
    <section className={styles['main-container']}>
      <h3 className={styles.title}>Як ще можна допомогти</h3>
      <div className={styles['card-container']}>
        <TestHowToHelpUsCard />
        <TestHowToHelpUsCard />
        <TestHowToHelpUsCard />
        <TestHowToHelpUsCard />
      </div>
    </section>
  );
};

export default TestHowToHelpUs;
