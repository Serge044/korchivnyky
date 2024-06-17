import React from 'react';
import { Link } from 'react-scroll';
import styles from './Footer.module.css';
import instaIcon from '../../img/іnstagram_icon.png';
import LogoKorchivnyky from '../../reusableComponents/LogoKorchivnyky';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoAndEmail}>
          <LogoKorchivnyky className={styles.logo} />
          <p className={styles.email}>korchivnyky@gmail.com</p>
        </div>
        <nav className={styles.links}>
          {[
            <Link
              to='aboutUs'
              smooth={true}
              duration={500}
              className={styles.link}
            >
              Про Корчівників
            </Link>,
            <Link
              to='currentProjects'
              smooth={true}
              duration={500}
              className={styles.link}
            >
              Поточний збір
            </Link>,
            <Link
              to='donationFair'
              smooth={true}
              duration={500}
              className={styles.link}
            >
              Донатний ярмарок
            </Link>,
            <Link
              to='photoReports'
              smooth={true}
              duration={500}
              className={styles.link}
            >
              Звіти
            </Link>,
            <Link
              to='offers'
              smooth={true}
              duration={500}
              className={styles.link}
            >
              Зворотній звʼязок
            </Link>,
          ].map((link, index) => (
            <div key={index} className={styles.linkWrapper}>
              {link}
            </div>
          ))}
        </nav>
        <div className={styles.socialsAndSupport}>
          <a
            className={styles.supportButton}
            href='https://send.monobank.ua/jar/5cFpG9WWPU'
            target='_blank'
            rel='noopener noreferrer'
          >
            Підтримати ❤️
          </a>
          <div className={styles.socialIcons}>
            <img src={instaIcon} alt='Instagram' className={styles.icon} />
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
