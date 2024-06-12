import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Nav.module.css";

export type NavType = {
  className?: string;
  icbaselineSearch?: string;
  icon1?: string;

  /** Style props */
  searchInputColor?: CSSProperties["color"];

  /** Action props */
  onLOGOTextClick?: () => void;
  onHomeTextClick?: () => void;
};

const Nav: FunctionComponent<NavType> = ({
  className = "",
  icbaselineSearch,
  icon1,
  searchInputColor,
  onLOGOTextClick,
  onHomeTextClick,
}) => {
  const searchInputStyle: CSSProperties = useMemo(() => {
    return {
      color: searchInputColor,
    };
  }, [searchInputColor]);

  return (
    <header className={[styles.nav3, className].join(" ")}>
      <div className={styles.nav3Child} />
      <div className={styles.logoContainer}>
        <a className={styles.logo} onClick={onLOGOTextClick}>
          LOGO
        </a>
      </div>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <div className={styles.searchBarChild} />
          <img
            className={styles.icbaselineSearchIcon}
            alt=""
            src={icbaselineSearch}
          />
          <input
            className={styles.searchInput}
            placeholder="Search here..."
            type="text"
            style={searchInputStyle}
          />
        </div>
      </div>
      <div className={styles.pageLinks}>
        <div className={styles.links}>
          <div className={styles.homeLink}>
            <a className={styles.home} onClick={onHomeTextClick}>
              Home
            </a>
          </div>
          <div className={styles.linkButtons}>
            <a className={styles.buy}>Buy</a>
          </div>
          <div className={styles.linkButtons1}>
            <a className={styles.rent}>Rent</a>
          </div>
          <div className={styles.linkButtons2}>
            <a className={styles.sell}>Sell</a>
          </div>
          <div className={styles.iconOne}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
            <div className={styles.iconTwo}>
              <img className={styles.icon1} alt="" src={icon1} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
