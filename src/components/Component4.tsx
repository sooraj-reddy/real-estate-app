import { FunctionComponent } from "react";
import styles from "./Component4.module.css";

export type Component4Type = {
  className?: string;
};

const Component4: FunctionComponent<Component4Type> = ({
  className = "",
}) => {
  return (
    <section
      className={[styles.galleryAndDescriptionWrapper, className].join(" ")}
    >
      <div className={styles.galleryAndDescription}>
        <div className={styles.frameParent}>
          <div className={styles.galleryWrapper}>
            <b className={styles.gallery}>{`Gallery `}</b>
          </div>
          <div className={styles.galleryImages}>
            <div className={styles.web183Wrapper}>
              <img
                className={styles.web183Icon}
                loading="lazy"
                alt=""
                src="/web18-3@2x.png"
              />
            </div>
            <img
              className={styles.web162Icon}
              loading="lazy"
              alt=""
              src="/web16-2@2x.png"
            />
            <img
              className={styles.web211Icon}
              loading="lazy"
              alt=""
              src="/web21-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.galleryImages1}>
          <div className={styles.web191Wrapper}>
            <img
              className={styles.web191Icon}
              loading="lazy"
              alt=""
              src="/web19-1@2x.png"
            />
          </div>
          <img
            className={styles.web171Icon}
            loading="lazy"
            alt=""
            src="/web17-1@2x.png"
          />
          <img
            className={styles.web201Icon}
            loading="lazy"
            alt=""
            src="/web20-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Component4;
