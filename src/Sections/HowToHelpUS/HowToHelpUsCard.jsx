import styles from './HowToHelpUs.module.css';

const HowToHelpUsCard = ({ imageSrc, altText, description }) => {
  return (
    <article className={styles.card}>
      <img src={imageSrc} alt={altText} className={styles.image} />
      <p className={styles.text}>{description}</p>
    </article>
  );
};

export default HowToHelpUsCard;
