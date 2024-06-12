import { FunctionComponent } from "react";
import styles from "./Component5.module.css";

export type Component5Type = {
  className?: string;
};

const Component5: FunctionComponent<Component5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.propertyBreadcrumbWrapper, className].join(" ")}
    >
      <div className={styles.propertyBreadcrumb}>
        <div className={styles.homeUk}>{`Home  > UK > London > The Lyra`}</div>
        <div className={styles.frameParent}>
          <div className={styles.summaryCategoriesParent}>
            <div className={styles.summaryCategories}>
              <div className={styles.summaryLabels}>
                <div className={styles.type}>Type</div>
              </div>
              <div className={styles.status}>Status</div>
              <div className={styles.summaryLabels1}>
                <div className={styles.area}>Area</div>
              </div>
              <div className={styles.summaryLabels2}>
                <div className={styles.furnishing}>Furnishing</div>
              </div>
              <div className={styles.summaryLabels3}>
                <div className={styles.bedrooms}>Bedrooms</div>
              </div>
              <div className={styles.summaryLabels4}>
                <div className={styles.bathrooms}>Bathrooms</div>
              </div>
              <div className={styles.price}>Price</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.starsParent}>
                  <img
                    className={styles.starsIcon}
                    loading="lazy"
                    alt=""
                    src="/stars.svg"
                  />
                  <div className={styles.reviewsWrapper}>
                    <a className={styles.reviews}>4.0 (131 reviews)</a>
                  </div>
                </div>
              </div>
              <div className={styles.summaryValues}>
                <div className={styles.summaryItems}>
                  <div className={styles.apartment}>Apartment</div>
                </div>
                <div className={styles.summaryItems1}>
                  <div className={styles.readyToMove}>Ready to move</div>
                </div>
                <b className={styles.ft}> 189.45 ft²</b>
                <div className={styles.summaryItems2}>
                  <b className={styles.furnished}>Furnished</b>
                </div>
                <div className={styles.summaryItems3}>
                  <b className={styles.b}>4</b>
                </div>
                <div className={styles.summaryItems4}>
                  <b className={styles.b1}>2</b>
                </div>
                <b className={styles.b2}> £ 390000</b>
              </div>
            </div>
          </div>
          <img
            className={styles.web141Icon}
            loading="lazy"
            alt=""
            src="/web14-1@2x.png"
          />
          <div className={styles.theLyraParent}>
            <h2 className={styles.theLyra}>The Lyra</h2>
            <div
              className={styles.portalNorthAction}
            >{`Portal North Action, London, England `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component5;
