import React from 'react';
import styles from './ResultsInNumbers.module.css';

const ResultInNumbersCard = ({ number, text1, text2, imageSrc, imageAlt }) => {
  return (
    <div className={styles['card-container']}>
      <img src={imageSrc} alt={imageAlt} className={styles.image} />
      <p className={styles.numbers}>{number}</p>
      <p className={styles.text1}>{text1}</p>
      <hr className={styles.line} />

      <p className={styles.text2}>{text2}</p>
    </div>
  );
};

export default ResultInNumbersCard;
