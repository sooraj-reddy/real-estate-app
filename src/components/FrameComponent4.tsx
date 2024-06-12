import { FunctionComponent } from "react";
import PropertyCard from "./PropertyCard";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.propertyCardWrapper}>
        <div className={styles.propertyCard}>
          <div className={styles.propertyCardChild} />
          <img className={styles.image4Icon} alt="" src="/image-41@2x.png" />
          <div className={styles.villaWithSpaciousAndLargeParent}>
            <div className={styles.villaWithSpacious}>
              Villa with spacious and Large Garden
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.mapPinParent}>
                <img
                  className={styles.mapPinIcon}
                  alt=""
                  src="/map-pin1@2x.png"
                />
                <div className={styles.puneWrapper}>
                  <div className={styles.pune}>Pune</div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.xxAcresParent}>
                  <div className={styles.xxAcres}>xx acres</div>
                  <div className={styles.rsXCrores}>Rs. x crores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PropertyCard />
      <PropertyCard />
    </div>
  );
};

export default FrameComponent4;
