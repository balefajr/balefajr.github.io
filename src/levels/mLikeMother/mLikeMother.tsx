import React from "react";
import { Gramophone } from "../../components/gramophone/Gramophone";
import { getPublicUrl } from "../../utils/utils";
import { Message } from "../../components/message/Message";

const musicTxt = `👆💽 این قطعه‌ رو تو کدوم فیلم شنیدی؟`;

export const MLikeMotherMusic = () => {
  return (
    <>
      <Gramophone src={getPublicUrl("assets/levels/mLikeMother/m.mp3")} />
      <Message text={musicTxt} style={{ transform: "translateY(-40px)" }} />
    </>
  );
};
