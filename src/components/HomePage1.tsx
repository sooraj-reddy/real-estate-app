import { FunctionComponent } from "react";
import styles from "./HomePage1.module.css";

export type HomePage1Type = {
  className?: string;
};

const HomePage1: FunctionComponent<HomePage1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.homePage, className].join(" ")}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <a className={styles.logo}>LOGO</a>
      <div className={styles.firstName}>First Name</div>
      <div className={styles.navigation}>
        <div className={styles.navigationLinks}>
          <div className={styles.linksContainer}>
            <a className={styles.buy}>Buy</a>
            <a className={styles.rent}>Rent</a>
            <a className={styles.sell}>Sell</a>
            <a className={styles.login}>Login</a>
          </div>
        </div>
        <form className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.bookAppointmentWrapper}>
            <h3 className={styles.bookAppointment}>BOOK APPOINTMENT</h3>
          </div>
          <div className={styles.formContainer}>
            <input
              className={styles.formContainerChild}
              placeholder="First Name"
              type="text"
            />
            <input
              className={styles.formContainerItem}
              placeholder="Last Name"
              type="text"
            />
          </div>
          <div className={styles.contactInfo}>
            <input
              className={styles.contactInfoChild}
              placeholder="Your Email"
              type="text"
            />
            <input
              className={styles.contactInfoItem}
              placeholder="Your Phone"
              type="text"
            />
          </div>
          <div className={styles.getAppointmentButtonWrapper}>
            <button className={styles.getAppointmentButton}>
              <div className={styles.getAppointmentButtonChild} />
              <div className={styles.getYourAppointment}>
                Get Your Appointment
              </div>
            </button>
          </div>
          <h1 className={styles.yourDreamHome}>Your Dream Home Awaits</h1>
        </form>
      </div>
      <a className={styles.buy1}>Buy</a>
      <div className={styles.searchBar}>
        <img className={styles.searchBarChild} alt="" src="/rectangle-1.svg" />
        <header className={styles.search}>
          <div className={styles.searchChild} />
          <img
            className={styles.icbaselineSearchIcon}
            loading="lazy"
            alt=""
            src="/icbaselinesearch.svg"
          />
        </header>
        <img
          className={styles.iconChevronDown}
          loading="lazy"
          alt=""
          src="/-icon-chevron-down.svg"
        />
      </div>
    </div>
  );
};

export default HomePage1;
