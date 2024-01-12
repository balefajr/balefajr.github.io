import React from "react";
import { Message } from "../../components/message/Message";
import posterRawImg from "./assets/poster.jpg";

const posterTxt = "🪁 این پوستر تو رو یاد کدوم فیلم میندازه؟";

export const AboutEllyPoster = () => {
  return <Message text={posterTxt} imgSrc={posterRawImg} />;
};
