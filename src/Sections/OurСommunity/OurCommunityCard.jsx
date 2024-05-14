import styles from './OurСommunity.module.css';
import ladaImage from '../../img/Lada.jpeg';
import instaImage from '../../img/іnstagram_icon.png';

const TestOurCommunityCard = () => {
  return (
    <div className={styles.card}>
      <img src={ladaImage} alt='Lada cat' className={styles.image} />
      <div className={styles.info}>
        <p className={styles.name}>Lada The Cat</p>
        <a href='#' className={styles.link}>
          <img src={instaImage} alt='Instagram icon' className={styles.insta} />
          lada_the_cat
        </a>
      </div>
    </div>
  );
};

export default TestOurCommunityCard;
