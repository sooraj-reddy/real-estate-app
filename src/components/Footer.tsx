import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.footerContainer}>
        <b className={styles.logo}>LOGO</b>
        <p className={styles.itIsA}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. 
        </p>
      </div>
      <div className={styles.footerNavigation}>
        <b className={styles.buy}>Buy</b>
        <div className={styles.footerRentContainer}>
          <b className={styles.rent}>Rent</b>
          <div className={styles.footerSellContainer}>
            <b className={styles.sell}>Sell</b>
            <b className={styles.login}>Login</b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
