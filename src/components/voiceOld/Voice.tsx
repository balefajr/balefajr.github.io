import React from "react";
import styles from "./Voice.module.scss";

export const Voice = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.IconWrapper}>
        <div className={styles.Icon} />
      </div>
      <div className={styles.ProgressWrapper}>
        <div className={styles.Progress}>
          <div className={styles.ProgressThumb} />
        </div>
        <p className={styles.Time}>۱۱:۰۰</p>
      </div>
    </div>
  );
};
