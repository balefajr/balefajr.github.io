import React from "react";
import styles from "./Play.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const Play: React.FC<Props> = (props) => {
  return (
    <div className={classNames(styles.IconWrapper, props.className)}>
      <div className={styles.Icon} />
    </div>
  );
};
