import styles from "./howToHelpUs.module.css";
import HowToHelpUsCard from "./HowToHelpUsCard";

const HowToHelpUs = () => {
  return (
    <div className={styles["main-container"]}>
      <h3 className={styles.title}>Як ще можна допомогти</h3>
      <div className={styles["card-container"]}>
        <HowToHelpUsCard />
        <HowToHelpUsCard />
        <HowToHelpUsCard />
        <HowToHelpUsCard />
      </div>
    </div>
  );
};

export default HowToHelpUs;
