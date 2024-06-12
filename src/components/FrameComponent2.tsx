import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  withItsOwnPool?: string;
  image3?: string;
  mumbai?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
  propPadding1?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  withItsOwnPool,
  image3,
  mumbai,
  propPadding,
  propWidth,
  propLeft,
  propPadding1,
  propFlex,
  propWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const withItsOwnStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const mapPinIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const mumbaiStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
    };
  }, [propFlex, propWidth1]);

  return (
    <div
      className={[styles.withItsOwnPoolParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.withItsOwn} style={withItsOwnStyle}>
        {withItsOwnPool}
      </div>
      <div className={styles.image3Parent}>
        <img className={styles.image3Icon} loading="lazy" alt="" src={image3} />
        <div className={styles.frameChild} />
        <img
          className={styles.mapPinIcon}
          alt=""
          src="/map-pin@2x.png"
          style={mapPinIconStyle}
        />
      </div>
      <div className={styles.mumbaiWrapper} style={frameDiv1Style}>
        <div className={styles.mumbai} style={mumbaiStyle}>
          {mumbai}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
