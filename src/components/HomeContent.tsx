import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import styles from "./HomeContent.module.css";

export type HomeContentType = {
  className?: string;
};

const HomeContent: FunctionComponent<HomeContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.homeContent, className].join(" ")}>
      <div className={styles.desktop1}>
        <div className={styles.imageContainer}>
          <div className={styles.imageContainerInner}>
            <div className={styles.propertyDetailsParent}>
              <h1 className={styles.propertyDetails}>PROPERTY DETAILS</h1>
              <div className={styles.allAwesomePopularLocationWrapper}>
                <div className={styles.allAwesomePopular}>
                  ALL AWESOME POPULAR LOCATION
                </div>
              </div>
            </div>
          </div>
          <div className={styles.propertyFeatures}>
            <FrameComponent3
              cutPaper="/cut-paper@2x.png"
              squareFeet3200="Square Feet : 3200"
            />
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.carIcon}
                    loading="lazy"
                    alt=""
                    src="/car@2x.png"
                  />
                </div>
              </div>
              <div className={styles.garageYes}>Garage : Yes</div>
            </div>
            <FrameComponent3
              cutPaper="/bedroom@2x.png"
              squareFeet3200="Bed Room : 3"
              propHeight="34px"
            />
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <img
                    className={styles.swimmingPoolIcon}
                    loading="lazy"
                    alt=""
                    src="/swimming-pool@2x.png"
                  />
                </div>
              </div>
              <div className={styles.swimmingPoolContainer}>
                <p className={styles.swimming}>Swimming</p>
                <p className={styles.poolYes}>Pool : Yes</p>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <img
                  className={styles.fullFamilyIcon}
                  loading="lazy"
                  alt=""
                  src="/full-family@2x.png"
                />
              </div>
              <div className={styles.idealForFamilyWrapper}>
                <div className={styles.idealForFamily}>Ideal For Family</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.desktop1Inner}>
          <div className={styles.frameParent1}>
            <div className={styles.spaciousAndLargeGardenParent}>
              <div className={styles.spaciousAndLarge}>
                Spacious and Large Garden
              </div>
              <div className={styles.image2Parent}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <img
                  className={styles.mapPinIcon}
                  loading="lazy"
                  alt=""
                  src="/map-pin@2x.png"
                />
                <div className={styles.rectangleDiv} />
              </div>
              <div className={styles.puneWrapper}>
                <div className={styles.pune}>Pune</div>
              </div>
              <div className={styles.frameChild1} />
            </div>
            <FrameComponent2
              withItsOwnPool="With its Own Pool"
              image3="/image-3@2x.png"
              mumbai="Mumbai"
            />
            <FrameComponent2
              withItsOwnPool={`In Forest - Fresh & Clean air`}
              image3="/image-4@2x.png"
              mumbai="Nainital"
              propPadding="var(--padding-241xl) var(--padding-10xl) 0px var(--padding-21xl)"
              propWidth="239px"
              propLeft="27px"
              propPadding1="unset"
              propFlex="unset"
              propWidth1="209px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
