import React from "react";
import { Message } from "../../components/message/Message";
import posterRawImg from "./assets/poster.jpg";

const posterTxt = "🌳 این پوستر چطور؟";

export const FriendHousePoster = () => {
  return <Message text={posterTxt} imgSrc={posterRawImg} />;
};
