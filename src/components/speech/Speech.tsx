import React from "react";
import styles from "./Speech.module.scss";
import dialogueImg from "./assets/bubble.png";
import classNames from "classnames";
import { Voice } from "../voice/Voice";

interface Props {
  src: string;
  className?: string;
}

export const Speech: React.FC<Props> = (props) => {
  return (
    <div className={classNames(styles.Container, props.className)}>
      <img src={dialogueImg} className={styles.Dialogue} />
      <Voice src={props.src} className={styles.Voice} />
    </div>
  );
};
