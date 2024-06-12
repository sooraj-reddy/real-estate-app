import { FunctionComponent } from "react";
import HomePage1 from "../components/HomePage1";
import HomeContent from "../components/HomeContent";
import Footer1 from "../components/Footer1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./HomePage.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.header}>
        <HomePage1 />
        <HomeContent />
      </section>
      <Footer1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
