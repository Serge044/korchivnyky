import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import LogoKorchivnyky from '../../reusableComponents/LogoKorchivnyky';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <LogoKorchivnyky className={styles.logo} />

      <button
        className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label='Toggle menu'
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>

      <nav className={`${styles.navigation} ${isMenuOpen ? styles.show : ''}`}>
        <Link
          to='currentProjects'
          smooth={true}
          duration={500}
          className={styles.link}
          onClick={closeMenu}
        >
          Поточний збір
        </Link>
        <Link
          to='donationFair'
          smooth={true}
          duration={500}
          className={styles.link}
          onClick={closeMenu}
        >
          Донатний ярмарок
        </Link>
        <Link
          to='photoReports'
          smooth={true}
          duration={500}
          className={styles.link}
          onClick={closeMenu}
        >
          Звіти
        </Link>
        <Link
          to='offers'
          smooth={true}
          duration={500}
          className={styles.link}
          onClick={closeMenu}
        >
          Зворотній звʼязок
        </Link>
        <a
          href='/korchivnyky/faq'
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          FAQ
        </a>
      </nav>

      <a
        className={styles.support}
        href='https://send.monobank.ua/jar/5cFpG9WWPU'
        target='_blank'
        rel='noopener noreferrer'
        onClick={closeMenu}
      >
        підтримати ❤️
      </a>

      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
