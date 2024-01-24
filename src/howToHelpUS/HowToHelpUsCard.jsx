import styles from "./howToHelpUs.module.css";
import howToHelpUsImage from "../img/howTOHelpUs.jpeg";

const HowToHelpUsCard = () => {
  return (
    <div>
      <div>
        <img
          src={howToHelpUsImage}
          alt="heating pads"
          className={styles.image}
        />
      </div>
      <p className={styles.text}>
        Гуманітарна допомога (теплі речі, грілки, ковдри...)
      </p>
    </div>
  );
};

export default HowToHelpUsCard;
