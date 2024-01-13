import React from "react";
import { Polaroid } from "../polaroid/Polaroid";
import { Speech } from "../speech/Speech";
import styles from "./Dialogue.module.scss";

interface Props {
  photoSrc: string;
  audioSrc: string;
  photoPosition: string;
}

export const Dialogue: React.FC<Props> = (props) => {
  return (
    <Polaroid
      src={props.photoSrc}
      position={props.photoPosition}
      className={styles.Polariod}
    >
      <Speech src={props.audioSrc} className={styles.Speech} />
    </Polaroid>
  );
};
