import React from "react";
import styles from "./Klaket.module.scss";
import klaketImg from "./assets/klaket.png";

interface Props {
  src: string;
}

export const Klaket: React.FC<Props> = (props) => {
  return (
    <div className={styles.Container}>
      <img className={styles.Klaket} src={klaketImg} />
      <div className={styles.VideoContainer}>
        <video controls className={styles.Video}>
          <source src={props.src} type="video/mp4" />
        </video>
        <div className={styles.Gradient} />
      </div>
    </div>
  );
};
