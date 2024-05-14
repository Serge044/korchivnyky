import styles from './logoKorchivnyky.module.css';
import AnimatedLogo from './AnimatedLogo/AnimatedLogo';

const LogoKorchivnyky = () => {
  return (
    <div className={styles['logo-container']}>
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
