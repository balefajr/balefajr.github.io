import React from "react";
import warImg from "./assets/war.jpg";
import { Dialogue } from "../../components/Dialogue/Dialogue";
import { Message } from "../../components/message/Message";
import { getPublicUrl } from "../../utils/utils";

const warTxt = "👆 این دیالوگ رو تو کدوم فیلم شنیدی؟ 🗨️";

export const TangeWar = () => {
  return (
    <>
      <Dialogue
        photoSrc={warImg}
        photoPosition="-30px"
        audioSrc={getPublicUrl("assets/levels/tange/war.mp3")}
      />
      <Message text={warTxt} style={{ transform: "translateY(-10px)" }} />
    </>
  );
};
