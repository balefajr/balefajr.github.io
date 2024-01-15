import React from "react";
import styles from "./Landing.module.scss";
import logo from "./assets/logo.png";

interface Props {
  onEnter: () => void;
}

export const Landing: React.FC<Props> = (props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <img src={logo} className={styles.Logo} />
        <p className={styles.Description}>
          سلام 👋
          <br />
          به مسابقه سینمایی بله خیلی خوش اومدی! 🎞️
        </p>
        <div className={styles.Enter} onClick={props.onEnter}>
          ورود به بازی
        </div>
      </div>
    </div>
  );
};
