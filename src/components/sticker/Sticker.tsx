import React from "react";
import styles from "./Sticker.module.scss";

interface Props {
  src: string;
}

export const Sticker: React.FC<Props> = (props) => {
  return <img src={props.src} className={styles.Sticker} />;
};
