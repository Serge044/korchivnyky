import React, { useState } from 'react';
import styles from './PhotoReports.module.css';
import PhotoReportsCard from './PhotoReportsCard';
import photoReportsImage1 from '../../img/photoReports.jpeg';
import photoReportsImage2 from '../../img/Lada.jpeg';
import photoReportsImage3 from '../../img/serge.jpeg';

function PhotoReports() {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const cardData = [
    {
      images: [photoReportsImage1, photoReportsImage2, photoReportsImage3],
      alt: 'Image description 1',
      text: 'Передали авто для Марії і її взводу аєророзвідки, які працюють на Херсонщині.',
    },
    {
      images: [photoReportsImage2, photoReportsImage3, photoReportsImage1],
      alt: 'Image description 2',
      text: 'Передали авто для Марії і її взводу аєророзвідки, які працюють на Херсонщині.',
    },
    {
      images: [photoReportsImage3, photoReportsImage1, photoReportsImage2],
      alt: 'Image description 3',
      text: 'Передали авто для Марії і її взводу аєророзвідки, які працюють на Херсонщині.',
    },
    {
      images: [photoReportsImage1, photoReportsImage2, photoReportsImage3],
      alt: 'Image description 4',
      text: 'Передали авто для Марії і її взводу аєророзвідки, які працюють на Херсонщині.',
    },
    {
      images: [photoReportsImage2, photoReportsImage3, photoReportsImage1],
      alt: 'Image description 5',
      text: 'Передали авто для Марії і її взводу аєророзвідки, які працюють на Херсонщині.',
    },
    {
      images: [photoReportsImage3, photoReportsImage1, photoReportsImage2],
      alt: 'Image description 6',
      text: 'Передали авто для Марії і її взводу аєророзвідки, які працюють на Херсонщині.',
    },
  ];

  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Фотозвіти</h3>
      <div className={styles['cards-container']}>
        {cardData.map((data, index) => (
          <PhotoReportsCard
            key={index}
            {...data}
            className={
              !showAll &&
              ((index >= 4 && window.innerWidth >= 1024) ||
                (index >= 2 && window.innerWidth < 1024))
                ? styles.hidden
                : ''
            }
          />
        ))}
      </div>
      <div className={styles['more-reports-button']}>
        <button onClick={handleShowMore}>
          {showAll ? 'Менше звітів' : 'Більше звітів'}
        </button>
      </div>
    </div>
  );
}

export default PhotoReports;
