import styles from "./ourPartners.module.css";
import OurPartnerCard from "./OurPartnerCard";

const OurPartners = () => {
  return (
    <div className={styles.mainContainer}>
      <h3 className={styles.title}>Наші партнери</h3>
      <div className={styles.cardContainer}>
        <OurPartnerCard />
        <OurPartnerCard />
        <OurPartnerCard />
        <OurPartnerCard />
        <OurPartnerCard />
        <OurPartnerCard />
      </div>
    </div>
  );
};

export default OurPartners;
