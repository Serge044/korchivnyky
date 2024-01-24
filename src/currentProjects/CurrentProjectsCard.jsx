import styles from "./currentProjects.module.css";
import image from "../img/currentProject.jpeg";

const CurrentProjectsCard = () => {
  return (
    <div className={styles.projectCart}>
      <img src={image} alt="Mitsubishi l200" className={styles.image} />
      <div className={styles.textContainer}>
        <h3>Пікапи для 401 ОСБ</h3>
        <p className={styles.para}>
          Збір на 5 пікапів для 401 Окремого Стрілецького Батальйону, який воює
          на Бахмутському напрямку.
          <br /> П'ять пікапів, які ми купимо, відремонтуємо, пофарбуємо,
          докупимо зимню та запасну резину, та затюнінгуємо під запит
          батальйону.
          <br /> Наразі наша мета 2.5 млн гривень.
        </p>
        <button className={styles.button}>Підтримати</button>
      </div>
    </div>
  );
};

export default CurrentProjectsCard;
