import React from "react";
import gramophoneImg from "./assets/gramophone.png";
import styles from "./Gramophone.module.scss";
import { Voice } from "../voice/Voice";

interface Props {
  src: string;
}

export const Gramophone: React.FC<Props> = (props) => {
  return (
    <div className={styles.Container}>
      <img src={gramophoneImg} className={styles.Gramophone} />
      <Voice src={props.src} className={styles.Voice} />
    </div>
  );
};
