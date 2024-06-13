import React from 'react';
import styles from './OurTeam.module.css';

const OurTeamCard = ({
  imageSrc,
  imageAlt,
  name,
  role,
  description,
  instaImage,
  instaAlt,
  instaLink,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={imageAlt} className={styles.image} />
      <h4 className={styles.name}>{name}</h4>
      <p className={styles.role}>{role}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles['social-links']}>
        <a href={instaLink} target='_blank' rel='noopener noreferrer'>
          <img src={instaImage} alt={instaAlt} className={styles.links} />
        </a>
      </div>
    </div>
  );
};

export default OurTeamCard;
