import styles from "./ourСommunity.module.css";
import OurCommunityCard from "./OurCommunityCard";

const OurСommunity = () => {
  return (
    <div className={styles["main-container"]}>
      <h3 className={styles.title}>Наша спільнота</h3>
      <p>
        Люди, які безперервно допомагають зі зборами та пришвидшують перемогу
      </p>
      <div className={styles["card-container"]}>
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
        <OurCommunityCard />
      </div>
    </div>
  );
};

export default OurСommunity;
