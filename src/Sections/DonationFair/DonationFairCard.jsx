import React from 'react';
import styles from './DonationFair.module.css';
import donationFairImage from '../../img/donationFair.jpeg';

const TestDonationFairCard = () => {
  return (
    <div className={styles['card']}>
      <img
        src={donationFairImage}
        alt='Flag with Budanov signature'
        className={styles.image}
      />
      <div className={styles['content']}>
        <p className={styles.text}>Тубус РПГ-30 від 401 ОСБ</p>
        <a href='#donate' className={styles.button}>
          Донат 100к грн
        </a>
      </div>
    </div>
  );
};

export default TestDonationFairCard;
