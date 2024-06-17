import styles from './Header.module.css';
import LogoKorchivnyky from '../../reusableComponents/LogoKorchivnyky';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className={styles.header}>
      <LogoKorchivnyky className={styles.logo} />

      <nav className={styles.navigation}>
        <Link
          to='currentProjects'
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Поточний збір
        </Link>
        <Link
          to='donationFair'
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Донатний ярмарок
        </Link>
        <Link
          to='photoReports'
          smooth={true}
          duration={500}
          className={styles.link}
        >
          Звіти
        </Link>
        <Link to='offers' smooth={true} duration={500} className={styles.link}>
          Зворотній звʼязок
        </Link>
      </nav>

      <a
        className={styles.support}
        href='https://send.monobank.ua/jar/5cFpG9WWPU'
        target='_blank'
        rel='noopener noreferrer'
      >
        підтримати ❤️
      </a>
    </header>
  );
};

export default Header;
