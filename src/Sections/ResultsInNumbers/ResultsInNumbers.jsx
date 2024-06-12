import React from 'react';
import styles from './ResultsInNumbers.module.css';
import ResultInNumbersCard from './RusultInNumbersCard';
import moneyImage from '../../img/moneyImage.png';

const ResultInNumbers = () => {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Результати в цифрах</h3>
      <div className={styles['numbers-container']}>
        <ResultInNumbersCard
          number='7.2+'
          text1='млн грн'
          text2='Зібрано на потреби армії починаючи з 2022 року'
          imageSrc={moneyImage}
          imageAlt='money image'
        />
        <ResultInNumbersCard
          number='60+'
          text1='авто'
          text2='вже передано, а нові авто вже зараз готуються до передачі.'
          imageSrc={moneyImage}
          imageAlt='car image'
        />
        <ResultInNumbersCard
          number='20+'
          text1='благодійних гестів'
          text2='вже проведено і ми готуємося до наступних'
          imageSrc={moneyImage}
          imageAlt='charity image'
        />
      </div>
    </div>
  );
};

export default ResultInNumbers;
