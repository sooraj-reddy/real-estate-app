import { FunctionComponent } from "react";
import Nav from "../components/Nav";
import SortAndFilter from "../components/SortAndFilter";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./PropertyListingsPage.module.css";

const PropertyListingsPage: FunctionComponent = () => {
  return (
    <div className={styles.propertyListingsPage}>
      <Nav
        icbaselineSearch="/icbaselinesearch1.svg"
        icon1="/vector-12.svg"
        searchInputColor="#1f1f1f"
      />
      <main className={styles.propertyCards}>
        <div className={styles.sortAndFilterWrapper}>
          <SortAndFilter />
        </div>
        <div className={styles.propertyCardsInner}>
          <div className={styles.frameParent}>
            <div className={styles.propertyCardWrapper}>
              <div className={styles.propertyCard}>
                <div className={styles.propertyCardChild} />
                <img
                  className={styles.image4Icon}
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className={styles.villaWithSpaciousAndLargeParent}>
                  <div className={styles.villaWithSpacious}>
                    Villa with spacious and Large Garden
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.mapPinParent}>
                      <img
                        className={styles.mapPinIcon}
                        loading="lazy"
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
            <div className={styles.propertyCard1}>
              <div className={styles.propertyCardItem} />
              <img
                className={styles.image4Icon1}
                alt=""
                src="/image-41@2x.png"
              />
              <div className={styles.villaWithSpaciousAndLargeGroup}>
                <div className={styles.villaWithSpacious1}>
                  Villa with spacious and Large Garden
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.mapPinGroup}>
                    <img
                      className={styles.mapPinIcon1}
                      alt=""
                      src="/map-pin1@2x.png"
                    />
                    <div className={styles.puneContainer}>
                      <div className={styles.pune1}>Pune</div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.xxAcresGroup}>
                      <div className={styles.xxAcres1}>xx acres</div>
                      <div className={styles.rsXCrores1}>Rs. x crores</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.propertyCard2}>
              <div className={styles.propertyCardInner} />
              <div className={styles.image4Parent}>
                <img
                  className={styles.image4Icon2}
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className={styles.villaWithSpacious2}>
                  Villa with spacious and Large Garden
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.mapPinContainer}>
                  <img
                    className={styles.mapPinIcon2}
                    alt=""
                    src="/map-pin1@2x.png"
                  />
                  <div className={styles.puneFrame}>
                    <div className={styles.pune2}>Pune</div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.xxAcresContainer}>
                    <div className={styles.xxAcres2}>xx acres</div>
                    <div className={styles.rsXCrores2}>Rs. x crores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.propertyCardsChild}>
          <div className={styles.frameParent2}>
            <div className={styles.propertyCardContainer}>
              <div className={styles.propertyCard3}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.image4Icon3}
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className={styles.villaWithSpaciousAndLargeContainer}>
                  <div className={styles.villaWithSpacious3}>
                    Villa with spacious and Large Garden
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.mapPinParent1}>
                      <img
                        className={styles.mapPinIcon3}
                        alt=""
                        src="/map-pin1@2x.png"
                      />
                      <div className={styles.puneWrapper1}>
                        <div className={styles.pune3}>Pune</div>
                      </div>
                    </div>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.xxAcresParent1}>
                        <div className={styles.xxAcres3}>xx acres</div>
                        <div className={styles.rsXCrores3}>Rs. x crores</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.propertyCard4}>
              <div className={styles.propertyCardChild1} />
              <img
                className={styles.image4Icon4}
                alt=""
                src="/image-41@2x.png"
              />
              <div className={styles.villaWithSpaciousAndLargeParent1}>
                <div className={styles.villaWithSpacious4}>
                  Villa with spacious and Large Garden
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.mapPinParent2}>
                    <img
                      className={styles.mapPinIcon4}
                      alt=""
                      src="/map-pin1@2x.png"
                    />
                    <div className={styles.puneWrapper2}>
                      <div className={styles.pune4}>Pune</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper3}>
                    <div className={styles.xxAcresParent2}>
                      <div className={styles.xxAcres4}>xx acres</div>
                      <div className={styles.rsXCrores4}>Rs. x crores</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.propertyCard5}>
              <div className={styles.propertyCardChild2} />
              <div className={styles.image4Wrapper}>
                <img
                  className={styles.image4Icon5}
                  alt=""
                  src="/image-41@2x.png"
                />
              </div>
              <div className={styles.villaWithSpacious5}>
                Villa with spacious and Large Garden
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.mapPinParent3}>
                  <img
                    className={styles.mapPinIcon5}
                    alt=""
                    src="/map-pin1@2x.png"
                  />
                  <div className={styles.puneWrapper3}>
                    <div className={styles.pune5}>Pune</div>
                  </div>
                </div>
                <div className={styles.frameWrapper4}>
                  <div className={styles.xxAcresParent3}>
                    <div className={styles.xxAcres5}>xx acres</div>
                    <div className={styles.rsXCrores5}>Rs. x crores</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.propertyCardsInner1}>
          <FrameComponent4 />
        </div>
      </main>
    </div>
  );
};

export default PropertyListingsPage;
