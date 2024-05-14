import React from 'react';
import styles from './ResultsInNumbers.module.css';
import moneyImage from '../../img/moneyImage.png';

const TestResultInNumbersCard = () => {
  return (
    <div className={styles['card-container']}>
      <img src={moneyImage} alt='money image' className={styles.image} />
      <p className={styles.numbers}>7.2+</p>
      <hr className={styles.line} />
      <p className={styles.text}>
        млн грн Зібрано на потреби армії починаючи з 2022 року
      </p>
    </div>
  );
};

export default TestResultInNumbersCard;
