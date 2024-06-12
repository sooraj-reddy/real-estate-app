import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  className?: string;
  web21?: string;
  oVOArenaBuildingLondon?: string;
  from2195month?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const Component: FunctionComponent<ComponentType> = ({
  className = "",
  web21,
  oVOArenaBuildingLondon,
  from2195month,
  propPadding,
  propHeight,
  propDisplay,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const oVOArenaBuildingContainerStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div
      className={[styles.similarPropertyCardsInner, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.web21Parent}>
        <img className={styles.web21Icon} loading="lazy" alt="" src={web21} />
        <div
          className={styles.ovoArenaBuildingContainer}
          style={oVOArenaBuildingContainerStyle}
        >
          <p className={styles.ovoArenaBuilding}>{oVOArenaBuildingLondon}</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.from2195month}>{from2195month}</p>
        </div>
      </div>
    </div>
  );
};

export default Component;
