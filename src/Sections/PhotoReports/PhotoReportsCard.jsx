import React, { useState, useEffect } from 'react';
import styles from './PhotoReports.module.css';
import photoReportsImage1 from '../../img/photoReports.jpeg';
import photoReportsImage2 from '../../img/photoReports.jpeg';
import photoReportsImage3 from '../../img/photoReports.jpeg';

export const PhotoReportsCard = ({ className = '' }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animate, setAnimate] = useState(null);

  const images = [photoReportsImage1, photoReportsImage2, photoReportsImage3];

  const handleCardClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIsFullScreen(false);
  };

  const handleOverlayClick = () => {
    setIsFullScreen(false);
  };

  const handleNextImage = () => {
    setAnimate('next');
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimate(null);
    }, 300);
  };

  const handlePrevImage = () => {
    setAnimate('prev');
    setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setAnimate(null);
    }, 300);
  };

  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isFullScreen]);

  return (
    <>
      {isFullScreen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div
            className={styles.fullScreenCard}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={handleCloseClick}>
              ✖
            </button>
            <button className={styles.prevButton} onClick={handlePrevImage}>
              ◀
            </button>
            <div
              className={`${styles.imageContainer} ${
                animate ? styles[animate] : ''
              }`}
            >
              <img
                src={images[currentImageIndex]}
                alt='Korchivnyky and soldiers on the background of cars'
                className={styles.fullScreenImage}
              />
            </div>
            <button className={styles.nextButton} onClick={handleNextImage}>
              ▶
            </button>
            <p>
              Передали авто для Марії і її взводу аєророзвідки, які працюють на
              Херсонщині.
            </p>
          </div>
        </div>
      )}
      <div className={`${styles.card} ${className}`} onClick={handleCardClick}>
        <img
          src={photoReportsImage1}
          alt='Korchivnyky and soldiers on the background of cars'
          className={styles.image}
        />
        <p>
          Передали авто для Марії і її взводу аєророзвідки, які працюють на
          Херсонщині.
        </p>
      </div>
    </>
  );
};

export default PhotoReportsCard;
