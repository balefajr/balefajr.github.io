import React from "react";
import { getPublicUrl } from "../../utils/utils";
import { Gif } from "../../components/gif/Gif";
import bus from "./assets/bus.gif";
import { Message } from "../../components/message/Message";

export const RageKhabGif = () => {
  return (
    <>
      <Gif
        audioSrc={getPublicUrl("assets/levels/rageKhab/bus.mp3")}
        gifSrc={bus}
      />
      <Message
        text={"کدوم فیلمه ؟ 💤"}
        style={{ transform: "translateY(-24px)" }}
      />
    </>
  );
};
