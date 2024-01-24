import styles from "./howToHelpUs.module.css";
import HowToHelpUsCard from "./HowToHelpUsCard";

const HowToHelpUs = () => {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.title}>Як ще можна допомогти</h3>
      {/* test */}
      <div className={styles.cardContainer}>
        <HowToHelpUsCard />
        <HowToHelpUsCard />
        <HowToHelpUsCard />
        <HowToHelpUsCard />
      </div>
    </div>
  );
};

export default HowToHelpUs;
