import React from 'react';
import styles from './OurTeam.module.css';
import sergeImage from '../../img/serge.jpeg';
import instaImage from '../../img/іnstagram_icon.png';

const TestOurTeamCard = () => {
  return (
    <div className={styles.card}>
      <img src={sergeImage} alt='Serge' className={styles.image} />
      <h4 className={styles.name}>Serge Makogon</h4>
      <p className={styles.role}>MR. Terminator</p>
      <p className={styles.description}>
        Крутий тіп!
        <br /> Плюси: вміє робити будь що.
        <br /> Мінуси: погано.
      </p>
      <div className={styles['social-links']}>
        <img src={instaImage} alt='Instagram icon' className={styles.links} />
      </div>
    </div>
  );
};

export default TestOurTeamCard;
