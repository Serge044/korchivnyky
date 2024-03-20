import aboutUsImage from '../img/aboutUs.jpeg';
import styles from './aboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles['main-container']}>
      <div className={styles['text-container']}>
        <h3>Про нас</h3>
        <p>
          Ми - банда волонтерів “Корчівники”. Збираємо кошти, закуповуємо
          техніку для бійців, продаємо трофеї і так по колу, крок за кроком до
          перемоги! "Наша зброя - це ЗСУ і ми їм допомагаємо. Нехай русня
          палає”. (с)
        </p>
      </div>
      <img src={aboutUsImage} alt='Korchivnyky team' className={styles.image} />
    </div>
  );
};

export default AboutUs;
