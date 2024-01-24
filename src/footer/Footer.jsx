import styles from "./footer.module.css";
import instaIcon from "../img/іnstagram_icon.png";
import tgIcon from "../img/tgIcon.png";
import xIcon from "../img/xIcon.png";
import LogoKorchivnyky from "../reusableComponents/logoKorchivnyky";

const Footer = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <LogoKorchivnyky />
          <p className={styles.email}>korchivnyky@gmail.com</p>
        </div>
        <div className={styles.links}>
          <a href="#">Про Корчівників</a>
          <a href="#">Проекти</a>
          <a href="#">Донатний ярмарок</a>
          <a href="#">Фотозвіт</a>
          <a href="#">Реалізація співпраці</a>
          <a href="#">Наша команда</a>
          <a href="#">Наші партнери</a>
        </div>
        <div className={styles.socialsAndSupport}>
          <div className={styles.support}>підтримати ❤️</div>
          <div className={styles.socoalIconsContainer}>
            <img src={instaIcon} alt="Instagram" className={styles.icon} />
            <img src={xIcon} alt="X" className={styles.icon} />
            <img src={tgIcon} alt="Telegram" className={styles.icon} />
          </div>
        </div>
      </div>
      <div className={styles.allRightReservedContainer}>
        <p>© 2022-2024 «Корчівники». Всі права захищені.</p>
      </div>
    </>
  );
};

export default Footer;
