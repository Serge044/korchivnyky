import React from 'react';
import styles from './ResultsInNumbers.module.css';
import TestResultInNumbersCard from './RusultInNumbersCard';

const ResultInNumbers = () => {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Результати в цифрах</h3>
      <div className={styles['numbers-container']}>
        <TestResultInNumbersCard />
        <TestResultInNumbersCard />
        <TestResultInNumbersCard />
      </div>
    </div>
  );
};

export default ResultInNumbers;
