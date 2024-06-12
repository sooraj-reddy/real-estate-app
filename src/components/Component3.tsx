import { FunctionComponent } from "react";
import styles from "./Component3.module.css";

export type Component3Type = {
  className?: string;
};

const Component3: FunctionComponent<Component3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.amenitiesContentWrapper, className].join(" ")}>
      <div className={styles.amenitiesContent}>
        <b className={styles.facilitiesAndAmenities}>
          Facilities and Amenities
        </b>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.amenitiesIconsWrapper}>
                <div className={styles.amenitiesIcons}>
                  <div className={styles.div}>🔄</div>
                  <img
                    className={styles.image5Icon}
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                  />
                  <img
                    className={styles.image6Icon}
                    loading="lazy"
                    alt=""
                    src="/image-6@2x.png"
                  />
                  <img
                    className={styles.image8Icon}
                    loading="lazy"
                    alt=""
                    src="/image-8@2x.png"
                  />
                </div>
              </div>
              <div className={styles.amenitiesLabels}>
                <div className={styles.laundryRoom}>Laundry Room</div>
                <div className={styles.elevator}>Elevator</div>
                <a className={styles.studyRoom}>Study Room</a>
                <div className={styles.lobby}>Lobby</div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.amenitiesIconsParent}>
                <div className={styles.amenitiesIcons1}>
                  <div className={styles.frameParent1}>
                    <div className={styles.image7Wrapper}>
                      <img
                        className={styles.image7Icon}
                        loading="lazy"
                        alt=""
                        src="/image-7@2x.png"
                      />
                    </div>
                    <img
                      className={styles.image9Icon}
                      loading="lazy"
                      alt=""
                      src="/image-9@2x.png"
                    />
                  </div>
                </div>
                <img
                  className={styles.image11Icon}
                  loading="lazy"
                  alt=""
                  src="/image-11@2x.png"
                />
              </div>
              <div className={styles.receptionParent}>
                <div className={styles.reception}>Reception</div>
                <div className={styles.amenitySubLabels}>
                  <div className={styles.wifiConnectivity}>
                    Wifi Connectivity
                  </div>
                  <div className={styles.cctv}>CCTV</div>
                </div>
              </div>
            </div>
            <div className={styles.image10Parent}>
              <img
                className={styles.image10Icon}
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
              />
              <div className={styles.basketballCourtWrapper}>
                <div className={styles.basketballCourt}>Basketball Court</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component3;
