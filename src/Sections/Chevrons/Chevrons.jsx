import React from 'react';
import styles from './Chevrons.module.css';
import ChevronCard from './ChevronCard';
import bureviyShevronImage from '../../img/bureviyShevron.png';

const chevronData = [
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 2',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 3',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
  {
    imageSrc: bureviyShevronImage,
    altText: 'Bureviy chevron',
    cardText: 'НГУ Буревій 24',
  },
];

function Chevrons() {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Реалізація співпраці у шевронах</h3>
      <p className={styles.description}>
        Ми надали допомогу героям з цих бригад, які виборюють нашу свободу:
      </p>
      <div className={styles['cards-container']}>
        {chevronData.map((data, index) => (
          <ChevronCard
            key={index}
            imageSrc={data.imageSrc}
            altText={data.altText}
            cardText={data.cardText}
          />
        ))}
      </div>
    </div>
  );
}

export default Chevrons;
