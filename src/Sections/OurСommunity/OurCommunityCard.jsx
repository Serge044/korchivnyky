import React from 'react';
import styles from './OurСommunity.module.css';

const OurCommunityCard = ({
  imageSrc,
  imageAlt,
  name,
  instaLink,
  instaImage,
  instaAlt,
  instaHandle,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={imageAlt} className={styles.image} />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <a
          href={instaLink}
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={instaImage} alt={instaAlt} className={styles.insta} />
          {instaHandle}
        </a>
      </div>
    </div>
  );
};

export default OurCommunityCard;
