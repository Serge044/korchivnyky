import React from 'react';
import aboutUsImage from '../../img/aboutUs.jpeg';
import styles from './AboutUs.module.css';

const TestAboutUs = () => {
  return (
    <section className={styles['main-container']}>
      <article className={styles['text-container']}>
        <h1>Про нас</h1>
        <p>
          Ми - банда волонтерів “Корчівники”. Збираємо кошти, закуповуємо
          техніку для бійців, продаємо трофеї і так по колу, крок за кроком до
          перемоги! "Наша зброя - це ЗСУ і ми їм допомагаємо. Нехай русня
          палає”. (с)
        </p>
      </article>
      <figure className={styles['image-container']}>
        <img
          src={aboutUsImage}
          alt='Команда Корчівники'
          className={styles.image}
        />
      </figure>
    </section>
  );
};

export default TestAboutUs;
