import { FunctionComponent } from "react";
import styles from "./Component2.module.css";

export type Component2Type = {
  className?: string;
};

const Component2: FunctionComponent<Component2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.locationContentWrapper, className].join(" ")}>
      <div className={styles.locationContent}>
        <b className={styles.location}>Location</b>
        <div className={styles.image13Parent}>
          <img
            className={styles.image13Icon}
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
          <div className={styles.portalWNorthActonLondonWrapper}>
            <p className={styles.portalWNorth}>
              1 Portal W North Acton, London, England W3 6BX
            </p>
          </div>
        </div>
        <img
          className={styles.locationOnMap}
          alt=""
          src="/location-on-map@2x.png"
        />
      </div>
    </section>
  );
};

export default Component2;
