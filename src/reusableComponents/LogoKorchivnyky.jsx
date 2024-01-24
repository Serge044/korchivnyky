import styles from "./logoKorchivnyky.module.css";
import logo from "../img/logo-korch.png";

const LogoKorchivnyky = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="Korchivnyky logo" className={styles.logoImage} />
      <div className={styles.titleAndSubtitleContainer}>
        <h2 className={styles.title}>Корчівники</h2>
        <p>
          Наша зброя - ЗСУ,
          <br /> а ми їм допомагаємо!
        </p>
      </div>
    </div>
  );
};

export default LogoKorchivnyky;
