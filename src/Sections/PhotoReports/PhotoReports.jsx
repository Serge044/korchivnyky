import React, { useState } from 'react';
import styles from './PhotoReports.module.css';
import TestPhotoReportsCard from './PhotoReportsCard';

function TestPhotoReports() {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Фотозвіти</h3>
      <div className={styles['cards-container']}>
        <TestPhotoReportsCard />
        <TestPhotoReportsCard />
        <TestPhotoReportsCard />
        <TestPhotoReportsCard />
        {showAll && (
          <>
            <TestPhotoReportsCard />
            <TestPhotoReportsCard />
            <TestPhotoReportsCard />
            {/* <TestPhotoReportsCard /> */}
          </>
        )}
      </div>
      <div className={styles['more-reports-button']}>
        <button onClick={handleShowMore}>
          {showAll ? 'Менше звітів' : 'Більше звітів'}
        </button>
      </div>
    </div>
  );
}

export default TestPhotoReports;
