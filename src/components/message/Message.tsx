import React, { PropsWithChildren } from "react";
import styles from "./Message.module.scss";
import classNames from "classnames";
import { Voice } from "../voice/Voice";

interface Props {
  text?: string;
  sendByMe?: boolean;
  imgSrc?: string;
  audioSrc?: string;
  messageOnly?: boolean;
  className?: string;
}

export const Message: React.FC<PropsWithChildren<Props>> = (props) => {
  const messageOnly = (
    <div
      className={classNames(styles.message, props.className, {
        [styles.sendByMeMessage]: props.sendByMe,
      })}
    >
      {props.audioSrc && <Voice src={""} />}
      {props.imgSrc && <img src={props.imgSrc} />}
      {props.text && <p dangerouslySetInnerHTML={{ __html: props.text }} />}
    </div>
  );
  if (props.messageOnly) {
    return messageOnly;
  }
  return (
    <div
      className={classNames(styles.messageWrapper, {
        [styles.sendByMeWrapper]: props.sendByMe,
      })}
    >
      <div className={styles.messageContainer}>
        {props.children}
        {messageOnly}
      </div>
    </div>
  );
};
