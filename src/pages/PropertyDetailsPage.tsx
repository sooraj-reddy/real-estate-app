import { FunctionComponent } from "react";
import Navbar from "../components/Navbar";
import Component5 from "../components/Component5";
import Component4 from "../components/Component4";
import Component3 from "../components/Component3";
import Component2 from "../components/Component2";
import Component1 from "../components/Component1";
import SimilarPropertiesContainer from "../components/SimilarPropertiesContainer";
import styles from "./PropertyDetailsPage.module.css";

const PropertyDetailsPage: FunctionComponent = () => {
  return (
    <div className={styles.propertyDetailsPage}>
      <Navbar />
      <Component5 />
      <Component4 />
      <section className={styles.descriptionContentWrapper}>
        <div className={styles.descriptionContent}>
          <b className={styles.description}>Description</b>
          <p className={styles.loremIpsumHasContainer}>
            <span>
              <span className={styles.loremIpsumHas}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.It has survived
                not only five centuries
              </span>
            </span>
          </p>
        </div>
      </section>
      <Component3 />
      <Component2 />
      <Component1 />
      <SimilarPropertiesContainer />
    </div>
  );
};

export default PropertyDetailsPage;
