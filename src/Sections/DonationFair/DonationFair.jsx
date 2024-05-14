import React, { useState } from 'react';
import styles from './DonationFair.module.css';
import TestDonationFairCard from './DonationFairCard';

const TestDonationFair = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  return (
    <div className={styles['main-container']}>
      <div className={styles['text-container']}>
        <h3 className={styles.title}>Донатний ярмарок</h3>
        <p className={styles.description}>
          Тут ви маєте можливість придбати унікальні трофеї від українських
          військових, які відстоюють нашу свободу та незалежність.
          <br />
          Ваша підтримка не лише збереже частину історії наших героїв, але й
          допоможе забезпечити необхідне обладнання для перемоги України.
        </p>
      </div>
      <div className={styles['cards-container']}>
        <TestDonationFairCard />
        <TestDonationFairCard />
        <TestDonationFairCard />
        <TestDonationFairCard />
        {showAllCards && (
          <>
            <TestDonationFairCard />
            <TestDonationFairCard />
            <TestDonationFairCard />
            <TestDonationFairCard />
            <TestDonationFairCard />
            <TestDonationFairCard />
          </>
        )}
      </div>
      <button
        className={styles['show-more']}
        onClick={() => setShowAllCards(!showAllCards)}
      >
        {showAllCards ? 'Сховати' : 'Показати більше'}
      </button>
    </div>
  );
};

export default TestDonationFair;
