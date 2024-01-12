import React, { PropsWithChildren } from "react";
import styles from "./Message.module.scss";
import classNames from "classnames";
import { Voice } from "../voiceOld/Voice";
import { Play } from "../play/Play";
import { ReactComponent as Bubble } from "../../assets/ui/bubble.svg";

interface Props {
  text?: string;
  sendByMe?: boolean;
  imgSrc?: string;
  audioSrc?: string;
  videoSrc?: string;
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
      {props.audioSrc && <Voice src={props.audioSrc} />}
      <div className={styles.ImageContainer}>
        {props.videoSrc && <Play className={styles.Play} />}
        {props.imgSrc && <img src={props.imgSrc} />}
      </div>
      {props.text && <p dangerouslySetInnerHTML={{ __html: props.text }} />}
      <Bubble
        className={classNames(styles.Bubble, {
          [styles.sendByMeBubble]: props.sendByMe,
        })}
      />
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
