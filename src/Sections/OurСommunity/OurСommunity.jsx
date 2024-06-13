import React from 'react';
import styles from './OurСommunity.module.css';
import OurCommunityCard from './OurCommunityCard';

import ladaImage from '../../img/Lada.jpeg';
import instaImage from '../../img/іnstagram_icon.png';

const communityMembers = [
  {
    imageSrc: ladaImage,
    imageAlt: 'Lada cat',
    name: 'Lada The Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
  {
    imageSrc: ladaImage,
    imageAlt: 'Another cat',
    name: 'Another Cat',
    instaLink:
      'https://www.google.com/search?q=british+cat&rlz=1C5GCCM_en&oq=british+cat&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQkxMTUwNmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
    instaImage: instaImage,
    instaAlt: 'Instagram icon',
    instaHandle: 'lada_the_cat',
  },
];

const OurCommunity = () => {
  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Наша спільнота</h3>
      <p className={styles.description}>
        Люди, які безперервно допомагають нам зі зборами та пришвидшують
        перемогу
      </p>
      <div className={styles['card-container']}>
        {communityMembers.map((member, index) => (
          <OurCommunityCard
            key={index}
            imageSrc={member.imageSrc}
            imageAlt={member.imageAlt}
            name={member.name}
            instaLink={member.instaLink}
            instaImage={member.instaImage}
            instaAlt={member.instaAlt}
            instaHandle={member.instaHandle}
          />
        ))}
      </div>
    </div>
  );
};

export default OurCommunity;
