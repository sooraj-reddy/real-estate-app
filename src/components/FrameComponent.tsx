import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.customerContainer}>
        <div className={styles.customerHeadingContainer}>
          <h1 className={styles.happyCustomers}>HAPPY CUSTOMERS</h1>
          <div className={styles.tradeHeading}>
            <h2 className={styles.happyTrade}>HAPPY TRADE</h2>
          </div>
        </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.testimonialNavigation}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
          </div>
          <FrameComponent1 />
        </div>
        <FrameComponent1 />
        <FrameComponent1 />
      </div>
      <img className={styles.vectorIcon1} alt="" src="/vector-3.svg" />
    </section>
  );
};

export default FrameComponent;
