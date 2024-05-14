import React from 'react';
import styles from './Chevrons.module.css';
import bureviyShevronImage from '../../img/bureviyShevron.png';

const TestChevronCard = () => {
  return (
    <div className={styles.card}>
      <img
        src={bureviyShevronImage}
        alt='Bureviy chevron'
        className={styles.image}
      />
      <p className={styles.cardText}>НГУ Буревій</p>
    </div>
  );
};

export default TestChevronCard;
