import React from 'react';
import styles from './Chevrons.module.css';
import TestChevronCard from './ChevronCard';

function TestChevrons() {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Реалізація співпраці у шевронах</h3>
      <p className={styles.description}>
        Ми надали допомогу героям з цих бригад, які виборюють нашу свободу:
      </p>
      <div className={styles['cards-container']}>
        {[...Array(24)].map((_, index) => (
          <TestChevronCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default TestChevrons;
