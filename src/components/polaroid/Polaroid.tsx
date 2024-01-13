import React, { PropsWithChildren } from "react";
import styles from "./Polaroid.module.scss";
import polaroidImg from "./assets/polaroid.png";
import classNames from "classnames";

interface Props {
  src: string;
  position?: string;
  className?: string;
}

export const Polaroid: React.FC<PropsWithChildren<Props>> = (props) => {
  return (
    <div className={classNames(props.className, styles.Container)}>
      <img src={polaroidImg} className={styles.Polaroid} />
      <div
        className={styles.Photo}
        style={{
          backgroundImage: `url(${props.src})`,
          backgroundPosition: props.position,
        }}
      />
      {props.children}
    </div>
  );
};
