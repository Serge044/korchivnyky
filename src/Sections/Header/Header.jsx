import styles from './Header.module.css';
import LogoKorchivnyky from '../../reusableComponents/LogoKorchivnyky';

const TestHeader = () => {
  return (
    <header className={styles.header}>
      <LogoKorchivnyky className={styles.logo} />

      <nav className={styles.navigation}>
        <a href='#projects' className={styles.link}>
          Проєкти
        </a>
        <a href='#market' className={styles.link}>
          Донатний ярмарок
        </a>
        <a href='#reports' className={styles.link}>
          Звіти
        </a>
        <a href='#contact' className={styles.link}>
          Зворотній звʼязок
        </a>
      </nav>

      <div className={styles.support}>підтримати ❤️</div>
    </header>
  );
};

export default TestHeader;
