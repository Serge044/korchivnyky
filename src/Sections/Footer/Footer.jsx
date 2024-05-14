import React from 'react';
import styles from './footer.module.css';
import instaIcon from '../../img/іnstagram_icon.png';
import tgIcon from '../../img/tgIcon.png';
import xIcon from '../../img/xIcon.png';
import LogoKorchivnyky from '../../reusableComponents/LogoKorchivnyky';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['logoAndEmail']}>
          <LogoKorchivnyky />
          <p className={styles.email}>korchivnyky@gmail.com</p>
        </div>
        <nav className={styles.links}>
          {[
            'Про Корчівників',
            'Проекти',
            'Донатний ярмарок',
            'Фотозвіт',
            'Реалізація співпраці',
            'Наша команда',
            'Наші партнери',
          ].map((link, index) => (
            <a key={index} href='#'>
              {link}
            </a>
          ))}
        </nav>
        <div className={styles['socials-and-support']}>
          <button className={styles['support-button']}>Підтримати ❤️</button>
          <div className={styles['social-icons']}>
            <img src={instaIcon} alt='Instagram' className={styles.icon} />
            <img src={xIcon} alt='X' className={styles.icon} />
            <img src={tgIcon} alt='Telegram' className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.rights}>
        <p>© 2022-2024 «Корчівники». Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
