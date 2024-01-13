import React from "react";
import { Message } from "../../components/message/Message";
import posterRawImg from "./assets/poster.jpg";
import kiteImg from "./assets/kite.png";

const posterTxt = "🪁 این پوستر تو رو یاد کدوم فیلم میندازه؟";

export const AboutEllyPoster = () => {
  return <Message text={posterTxt} imgSrc={posterRawImg} />;
};

export const AboutEllyKite = () => {
  return (
    <>
      <img src={kiteImg} style={{ width: 250 }} />
      <Message text={posterTxt} />
    </>
  );
};
