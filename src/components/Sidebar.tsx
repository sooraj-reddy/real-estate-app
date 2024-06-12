import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

export type SidebarType = {
  className?: string;
};

const Sidebar: FunctionComponent<SidebarType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMyPropertiesTextClick = useCallback(() => {
    // Please sync "User Properties-0" to the project
  }, []);

  const onPreviouslyViewedTextClick = useCallback(() => {
    // Please sync "User Previously viewed-0" to the project
  }, []);

  const onSavedTextClick = useCallback(() => {
    // Please sync "User Previously saved-0" to the project
  }, []);

  const onContactedTextClick = useCallback(() => {
    // Please sync "User Previously Contacted-0" to the project
  }, []);

  const onLogOutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.sidebar, className].join(" ")}>
      <div className={styles.sidebarChild} />
      <div className={styles.sidebarItems}>
        <b className={styles.profileSettings}>Profile settings</b>
      </div>
      <a className={styles.myProperties} onClick={onMyPropertiesTextClick}>
        My properties
      </a>
      <div className={styles.sidebarItems1}>
        <a className={styles.pastSearches}>Past searches</a>
      </div>
      <div
        className={styles.previouslyViewed}
        onClick={onPreviouslyViewedTextClick}
      >
        Previously viewed
      </div>
      <div className={styles.sidebarItems2}>
        <div className={styles.saved} onClick={onSavedTextClick}>
          Saved
        </div>
      </div>
      <div className={styles.sidebarItems3}>
        <div className={styles.contacted} onClick={onContactedTextClick}>
          Contacted
        </div>
      </div>
      <div className={styles.sidebarItems4}>
        <div className={styles.notifications}>Notifications</div>
      </div>
      <div className={styles.sidebarItems5}>
        <div className={styles.logOut} onClick={onLogOutTextClick}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
