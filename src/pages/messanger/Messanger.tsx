import React, { useRef, useState } from "react";
import styles from "./Messanger.module.scss";
import { Message } from "../../components/message/Message";
import { HamoonSahmeMan } from "../../levels/hamoon/hamoon";
import { ReactComponent as Send } from "../../assets/ui/send.svg";
import { hashCode } from "../../utils/utils";

export const Messanger = () => {
  const [answer, setAnswer] = useState("");
  const [messagesList, setMessagesList] = useState([
    <HamoonSahmeMan key={"1532612931"} />,
    // <HamoonTest />,
  ]);
  const listRef = useRef<HTMLDivElement>(null);
  const lastMessageIndexRef = useRef(0);
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //todo handle on mobile
    if (event.key === "Enter") {
      onSend();
    }
  };
  const onSend = () => {
    if (!answer.length) return;
    setMessagesList((messagesList) => [
      ...messagesList,
      <Message text={answer} sendByMe />,
    ]);
    setAnswer("");
    let response = <Message text={"نه اشتباهه!"} />;
    if (
      messagesList[0].key &&
      parseInt(messagesList[0].key) === hashCode(answer.trim())
    ) {
      response = <Message text={"آفرین درسته🥳"} />;
    }
    setTimeout(() => {
      setMessagesList((messagesList) => [...messagesList, response]);
    }, 500);
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
    }, 600);
  };
  return (
    <div className={styles.container}>
      <div className={styles.bar}>
        <div className={styles.avatar}></div>
        <p className={styles.name}>بله | سودای سیمرغ</p>
      </div>
      <div className={styles.messageListWrapper}>
        <div className={styles.messageListContainer} ref={listRef}>
          {messagesList}
        </div>
      </div>
      <div className={styles.bar}>
        <Send
          fill={answer.length ? "#00B894" : "#B3BAC5"}
          className={styles.send}
          onClick={onSend}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="پیام خود را بنویسید..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};
