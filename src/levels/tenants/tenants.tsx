import React from "react";
import { Sticker } from "../../components/sticker/Sticker";
import StickerRawImg from "./assets/abbasAgha.png";
import { Message } from "../../components/message/Message";

const stickerTxt = "👇 این استیکر از یکی از شخصیت های چه فیلمیه؟ ";

export const TenantsSticker = () => {
  return (
    <>
      <Message text={stickerTxt} />
      <Sticker src={StickerRawImg} />
    </>
  );
};
