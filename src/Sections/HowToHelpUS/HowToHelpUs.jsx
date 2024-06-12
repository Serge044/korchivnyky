import styles from './HowToHelpUs.module.css';
import HowToHelpUsCard from './HowToHelpUsCard';
import howToHelpUsImage from '../../img/howToHelpUs.jpeg';

const HowToHelpUs = () => {
  return (
    <section className={styles['main-container']}>
      <h3 className={styles.title}>Як ще можна допомогти</h3>
      <div className={styles['card-container']}>
        <HowToHelpUsCard
          imageSrc={howToHelpUsImage}
          altText='heating pads'
          description='Гуманітарна допомога (теплі речі, грілки, ковдри...)'
        />
        <HowToHelpUsCard
          imageSrc={howToHelpUsImage}
          altText='heating pads'
          description='Гуманітарна допомога (теплі речі, грілки, ковдри...)'
        />
        <HowToHelpUsCard
          imageSrc={howToHelpUsImage}
          altText='heating pads'
          description='Гуманітарна допомога (теплі речі, грілки, ковдри...)'
        />
        <HowToHelpUsCard
          imageSrc={howToHelpUsImage}
          altText='heating pads'
          description='Гуманітарна допомога (теплі речі, грілки, ковдри...)'
        />
      </div>
    </section>
  );
};

export default HowToHelpUs;
