import styles from './HowToHelpUs.module.css';
import howToHelpUsImage from '../../img/howTOHelpUs.jpeg';

const TestHowToHelpUsCard = () => {
  return (
    <article className={styles.card}>
      <img src={howToHelpUsImage} alt='heating pads' className={styles.image} />
      <p className={styles.text}>
        Гуманітарна допомога (теплі речі, грілки, ковдри...)
      </p>
    </article>
  );
};

export default TestHowToHelpUsCard;
