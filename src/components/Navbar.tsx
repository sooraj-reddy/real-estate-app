import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <header className={[styles.navbar, className].join(" ")}>
      <div className={styles.navbarChild} />
      <div className={styles.logoWrapper}>
        <a className={styles.logo}>LOGO</a>
      </div>
      <div className={styles.searchBarWrapper}>
        <div className={styles.searchBar}>
          <div className={styles.searchBarChild} />
          <img
            className={styles.icbaselineSearchIcon}
            alt=""
            src="/icbaselinesearch.svg"
          />
          <div className={styles.searchHereWrapper}>
            <div className={styles.searchHere}>Search here...</div>
          </div>
        </div>
      </div>
      <div className={styles.navigationMenuWrapper}>
        <div className={styles.navigationMenu}>
          <div className={styles.homeWrapper}>
            <a className={styles.home}>Home</a>
          </div>
          <div className={styles.navigationItems}>
            <a className={styles.buy}>Buy</a>
          </div>
          <div className={styles.navigationItems1}>
            <a className={styles.rent}>Rent</a>
          </div>
          <div className={styles.navigationItems2}>
            <a className={styles.sell}>Sell</a>
          </div>
          <div className={styles.vectorParent}>
            <img
              className={styles.vectorIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
