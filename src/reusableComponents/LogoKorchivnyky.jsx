import styles from './logoKorchivnyky.module.css';
import logo from '../img/logo-korch.png';
import AnimatedLogo from './AnimatedLogo/AnimatedLogo';

const LogoKorchivnyky = () => {
  return (
    <div className={styles['logo-container']}>
      {/* <img src={logo} alt='Korchivnyky logo' className={styles['logo-image']} /> */}
      <AnimatedLogo />
      <div className={styles['title-and-subtitle-container']}>
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
