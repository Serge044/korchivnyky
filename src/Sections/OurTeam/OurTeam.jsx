import React from 'react';
import styles from './OurTeam.module.css';
import OurTeamCard from './OurTeamCard';

import sergeImage from '../../img/serge.jpeg';
import instaImage from '../../img/іnstagram_icon.png';

const teamMembers = [
  {
    imageSrc: sergeImage,
    imageAlt: 'Serge',
    name: 'Serge Makogon',
    role: 'MR. Terminator',
    description: `Крутий тіп!
    Плюси: вміє робити будь що.
    Мінуси: погано.`,
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaLink: 'https://www.instagram.com/sergemakogon',
  },
  {
    imageSrc: sergeImage,
    imageAlt: 'Serge',
    name: 'Serge Makogon',
    role: 'MR. Terminator',
    description: `Крутий тіп!
    Плюси: вміє робити будь що.
    Мінуси: погано.`,
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaLink: 'https://www.instagram.com/sergemakogon',
  },
  {
    imageSrc: sergeImage,
    imageAlt: 'Serge',
    name: 'Serge Makogon',
    role: 'MR. Terminator',
    description: `Крутий тіп!
    Плюси: вміє робити будь що.
    Мінуси: погано.`,
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaLink: 'https://www.instagram.com/sergemakogon',
  },
  {
    imageSrc: sergeImage,
    imageAlt: 'Serge',
    name: 'Serge Makogon',
    role: 'MR. Terminator',
    description: `Крутий тіп!
    Плюси: вміє робити будь що.
    Мінуси: погано.`,
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaLink: 'https://www.instagram.com/sergemakogon',
  },
  {
    imageSrc: sergeImage,
    imageAlt: 'Serge',
    name: 'Serge Makogon',
    role: 'MR. Terminator',
    description: `Крутий тіп!
    Плюси: вміє робити будь що.
    Мінуси: погано.`,
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaLink: 'https://www.instagram.com/sergemakogon',
  },
  {
    imageSrc: sergeImage,
    imageAlt: 'Serge',
    name: 'Serge Makogon',
    role: 'MR. Terminator',
    description: `Крутий тіп!
    Плюси: вміє робити будь що.
    Мінуси: погано.`,
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaLink: 'https://www.instagram.com/sergemakogon',
  },
];

function OurTeam() {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Наша команда</h3>
      <div className={styles['card-container']}>
        {teamMembers.map((member, index) => (
          <OurTeamCard
            key={index}
            imageSrc={member.imageSrc}
            imageAlt={member.imageAlt}
            name={member.name}
            role={member.role}
            description={member.description}
            instaImage={member.instaImage}
            instaAlt={member.instaAlt}
            instaLink={member.instaLink}
          />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
