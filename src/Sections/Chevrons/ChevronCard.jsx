import React from 'react';
import styles from './Chevrons.module.css';

const ChevronCard = ({ imageSrc, altText, cardText }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={altText} className={styles.image} />
      <p className={styles.cardText}>{cardText}</p>
    </div>
  );
};

export default ChevronCard;
