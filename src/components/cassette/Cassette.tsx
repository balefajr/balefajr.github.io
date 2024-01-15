import React from "react";
import cassetteImg from "./assets/cassette.png";
import styles from "./Cassette.module.scss";
import { Voice } from "../voice/Voice";

interface Props {
  src: string;
}

export const Cassette: React.FC<Props> = (props) => {
  return (
    <div className={styles.Container}>
      <img src={cassetteImg} className={styles.Cassette} />
      <Voice src={props.src} className={styles.Voice} />
    </div>
  );
};
