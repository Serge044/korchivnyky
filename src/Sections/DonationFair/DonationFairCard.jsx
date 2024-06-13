import React from 'react';
import styles from './DonationFair.module.css';

const DonationFairCard = ({
  imageSrc,
  altText,
  cardText,
  buttonText,
  link,
}) => {
  return (
    <div className={styles['card']}>
      <img src={imageSrc} alt={altText} className={styles.image} />
      <div className={styles['content']}>
        <p className={styles.text}>{cardText}</p>
        <a
          href={link}
          className={styles.button}
          target='_blank'
          rel='noopener noreferrer'
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default DonationFairCard;
