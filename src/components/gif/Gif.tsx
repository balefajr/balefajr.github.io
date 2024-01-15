import React from "react";
import styles from "./Gif.module.scss";
import { Cassette } from "../cassette/Cassette";
import lighting from "./assets/lighting.png";

interface Props {
  audioSrc: string;
  gifSrc: string;
}

export const Gif: React.FC<Props> = (props) => {
  return (
    <div className={styles.Container}>
      <Cassette src={props.audioSrc} />
      <div className={styles.LightingWrapper}>
        <div className={styles.LightingContainer}>
          <img src={lighting} className={styles.Lighting} />
          <div className={styles.Background} />
        </div>
      </div>
      <img src={props.gifSrc} className={styles.Gif} />
    </div>
  );
};
