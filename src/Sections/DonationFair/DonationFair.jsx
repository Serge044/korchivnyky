import React, { useState } from 'react';
import styles from './DonationFair.module.css';
import DonationFairCard from './DonationFairCard';
import donationFairImage from '../../img/donationFair.jpeg';

const DonationFair = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const cardsData = [
    {
      imageSrc: donationFairImage,
      altText: 'Flag with Budanov signature',
      cardText: 'Тубус РПГ-30 від 401 ОСБ',
      buttonText: 'Донат 100к грн',
      link: 'https://www.google.com/',
    },
    {
      imageSrc: donationFairImage,
      altText: 'Flag with Budanov signature',
      cardText: 'Тубус РПГ-30 від 401 ОСБ',
      buttonText: 'Донат 100к грн',
      link: 'https://www.google.com/',
    },
    {
      imageSrc: donationFairImage,
      altText: 'Flag with Budanov signature',
      cardText: 'Тубус РПГ-30 від 401 ОСБ',
      buttonText: 'Донат 100к грн',
      link: 'https://www.google.com/',
    },
    {
      imageSrc: donationFairImage,
      altText: 'Flag with Budanov signature',
      cardText: 'Тубус РПГ-30 від 401 ОСБ',
      buttonText: 'Донат 100к грн',
      link: 'https://www.google.com/',
    },
  ];

  const extraCards = [
    {
      imageSrc: donationFairImage,
      altText: 'Flag with Budanov signature',
      cardText: 'Тубус РПГ-30 від 401 ОСБ',
      buttonText: 'Донат 100к грн',
      link: 'https://www.google.com/',
    },
    {
      imageSrc: donationFairImage,
      altText: 'Flag with Budanov signature',
      cardText: 'Тубус РПГ-30 від 401 ОСБ',
      buttonText: 'Донат 100к грн',
      link: 'https://www.google.com/',
    },
    {
      imageSrc: donationFairImage,
      altText: 'Flag with Budanov signature',
      cardText: 'Тубус РПГ-30 від 401 ОСБ',
      buttonText: 'Донат 100к грн',
      link: 'https://www.google.com/',
    },
  ];

  const isMobile = window.innerWidth <= 768;

  const displayedCards = showAllCards
    ? [...cardsData, ...extraCards]
    : cardsData.slice(0, isMobile ? 2 : 4);

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
        {displayedCards.map((card, index) => (
          <DonationFairCard
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            cardText={card.cardText}
            buttonText={card.buttonText}
            link={card.link}
          />
        ))}
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

export default DonationFair;
