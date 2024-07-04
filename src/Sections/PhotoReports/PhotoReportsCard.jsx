import React, { useState, useEffect } from 'react';
import styles from './PhotoReports.module.css';

export const PhotoReportsCard = ({ className = '', images, alt, text }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animate, setAnimate] = useState(null);

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
                alt={alt}
                className={styles.fullScreenImage}
              />
            </div>
            <button className={styles.nextButton} onClick={handleNextImage}>
              ▶
            </button>
            <p>{text}</p>
          </div>
        </div>
      )}
      <div className={`${styles.card} ${className}`} onClick={handleCardClick}>
        <img src={images[0]} alt={alt} className={styles.image} />
        <p>{text}</p>
      </div>
    </>
  );
};

export default PhotoReportsCard;
