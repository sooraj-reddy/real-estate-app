import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  cutPaper?: string;
  squareFeet3200?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  cutPaper,
  squareFeet3200,
  propHeight,
}) => {
  const squareFeetStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.cutPaperIcon}
            loading="lazy"
            alt=""
            src={cutPaper}
          />
        </div>
      </div>
      <div className={styles.squareFeet} style={squareFeetStyle}>
        {squareFeet3200}
      </div>
    </div>
  );
};

export default FrameComponent3;
