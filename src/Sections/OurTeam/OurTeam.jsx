import React from 'react';
import styles from './OurTeam.module.css';
import TestOurTeamCard from './OurTeamCard';

function TestOurTeam() {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Наша команда</h3>
      <div className={styles['card-container']}>
        <TestOurTeamCard />
        <TestOurTeamCard />
        <TestOurTeamCard />
        <TestOurTeamCard />
        <TestOurTeamCard />
        <TestOurTeamCard />
      </div>
    </div>
  );
}

export default TestOurTeam;
