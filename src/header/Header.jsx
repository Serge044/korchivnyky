import styles from './header.module.css';
import LogoKorchivnyky from '../reusableComponents/LogoKorchivnyky';

const Header = () => {
  return (
    <div className={styles.header}>
      <LogoKorchivnyky />

      <div className={styles.links}>
        <a href='#'>Про нас</a>
        <a href='#'>Проєкти</a>
        <a href='#'>Донатний ярмарок</a>
        <a href='#'>Звіти</a>
        <a href='#'>Партнери</a>
      </div>
      <div className={styles.support}>підтримати ❤️</div>
    </div>
  );
};

export default Header;
