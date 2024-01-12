import React, { useEffect, useRef, useState } from "react";
import styles from "./Messanger.module.scss";
import { Message } from "../../components/message/Message";
import { HamoonSahmeMan } from "../../levels/hamoon/hamoon";
import { ReactComponent as Send } from "../../assets/ui/send.svg";
import {
  handleChangeTheme,
  hashCode,
  phoneValidate,
  similarity,
} from "../../utils/utils";
import { GlassAgencyDirector } from "../../levels/glassAgency/glassAgency";
import { SeperationFather } from "../../levels/seperation/seperation";
import { CubeOfSugarMusic } from "../../levels/cubeOfSugar/cubeOfSugar";
import { WardenGallows } from "../../levels/warden/warden";
import { TenantsSticker } from "../../levels/tenants/tenants";
import { AboutEllyPoster } from "../../levels/aboutElly/aboutElly";
import { FriendHousePoster } from "../../levels/friendHouse/friendHouse";

export const Messanger = () => {
  const [answer, setAnswer] = useState("");
  const [messagesList, setMessagesList] = useState<JSX.Element[]>([]);
  const questionsRef = useRef([
    <TenantsSticker key={"اجاره نشین ها"} />,
    <FriendHousePoster key={"خانه دوست کجاست؟"} />,
    <AboutEllyPoster key={"درباره الی"} />,
    <Message
      text={
        "یه کد پنج رقمی برات ارسال شد. اون رو وارد کن. (الان برای تست 12345)"
      }
      key={"code"}
    />,
    <Message
      text={`تا اینجا که گل کاشتی و مرحله اول رو با موفقیت تموم کردی. 😃🎊✨
<br/>
برای اینکه وارد قرعه کشی سه دستگاه آیفون ۱۴ بشی شمارت رو برامون بفرست. 📱
(راستی یه چیزم در گوشی بگم😁: اگه لینک اختصاصی خودت رو برای دوستات بفرستی و اونا هم مثل تو بتونن تا اینجای مسابقه پیش برن، شانست تو قرعه کشی دو برابر میشه! ❌2️⃣👇)
http://balefajr.github.io/214lkjflkjaj`}
      key={"checkpoint"}
    />,
    <WardenGallows key={"سرخپوست"} />,
    <CubeOfSugarMusic key={"یه حبه قند"} />,
    <SeperationFather key={"جدایی نادر از سیمین"} />,
    <GlassAgencyDirector key={"ابراهیم حاتمی کیا"} />,
    <HamoonSahmeMan key={"هامون"} />,
    <Message
      text={`
سلام 👋
به سودای سیمرغ بله خوش اومدی! 🐦‍🔥
<br/>
تو این مسابقه قراره اطلاعات سینماییت رو به چالش بکشی و اگه بتونی مراحل رو خوب پشت سر بذاری و بخت هم باهات یار باشه، برندۀ آیفون 14 بشی! 📱
<br/>
آماده ای؟ 💪
`}
      key={"welcome"}
    />,
  ]);
  const currentQuestionRef = useRef<JSX.Element>(<>تست</>);
  useEffect(() => {
    if (questionsRef.current.length)
      currentQuestionRef.current = questionsRef.current.pop()!;
    if (currentQuestionRef.current)
      setMessagesList((messagesList) => [
        ...messagesList,
        currentQuestionRef.current,
      ]);
  }, []);
  const listRef = useRef<HTMLDivElement>(null);
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
      currentQuestionRef.current &&
      currentQuestionRef.current.key === "welcome"
    ) {
      if (answer == "بله") {
        currentQuestionRef.current = questionsRef.current.pop()!;
        response = (
          <>
            <Message text={`پس بزن بریم 🥳`} />
            {currentQuestionRef.current}
          </>
        );
      } else if (answer == "خیر") {
        response = <Message text={`پس هر وقت آماده بودی بگو 🥹`} />;
      } else {
        response = <Message text={`بله یا خیر؟ 😅`} />;
      }
    }
    if (
      currentQuestionRef.current &&
      currentQuestionRef.current.key === "code"
    ) {
      if (answer === "12345") {
        handleChangeTheme();
        currentQuestionRef.current = questionsRef.current.pop()!;
        response = (
          <>
            <Message
              text={`تبریک 🎊✨ وارد قرعه کشی شدی. امیدوارم برنده خوش شانسمون تو باشی🤞
<br/>
از اینجا به بعد سوالاتمون چالشی تر میشه! ولی میدونم که بازم میترکونی :) پس بزن بریم...`}
            />
            {currentQuestionRef.current}
          </>
        );
      } else {
        response = (
          <Message text={"کد وارد شده اشتباهه. لطفا دوباره وارد کن."} />
        );
      }
    }
    if (
      currentQuestionRef.current &&
      currentQuestionRef.current.key === "checkpoint"
    ) {
      if (phoneValidate(answer)) {
        currentQuestionRef.current = questionsRef.current.pop()!;
        response = <>{currentQuestionRef.current}</>;
      } else {
        response = (
          <Message
            text={
              "به نظر میاد شمارت  رو درست وارد نکرده باشی. لطفا دوباره بفرستش.🙏"
            }
          />
        );
      }
    } else {
      if (
        currentQuestionRef.current &&
        currentQuestionRef.current.key &&
        similarity(currentQuestionRef.current.key, answer.trim()) > 0.7
      ) {
        let next: JSX.Element;
        const answer = currentQuestionRef.current.key;
        if (questionsRef.current.length) {
          currentQuestionRef.current = questionsRef.current.pop()!;
          next = currentQuestionRef.current!;
        } else {
          next = (
            <Message
              text={`بابا تو چه قدر خفنی! این مرحله رو هم با موفقیت پشت سر گذاشتی و حالا شانس بیشتری برای برنده شدن تو قرعه کشی داری. ✨ امیدواریم تو همه مسابقه های زندگیت انقدر خوب باشی🙏 
<br/>
بله به راحتی 😉`}
            />
          );
        }
        response = (
          <>
            <Message text={`آفرین درسته🥳: ${answer}`} />
            {next}
          </>
        );
      }
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
