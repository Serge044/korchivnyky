import React from 'react';
import styles from './OurСommunity.module.css';
import TestOurCommunityCard from './OurCommunityCard';

const TestOurCommunity = () => {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Наша спільнота</h3>
      <p className={styles.description}>
        Люди, які безперервно допомагають нам зі зборами та пришвидшують
        перемогу
      </p>
      <div className={styles['card-container']}>
        {[...Array(24)].map((_, index) => (
          <TestOurCommunityCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default TestOurCommunity;
