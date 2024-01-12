import React from "react";
import { Gramophone } from "../../components/gramophone/Gramophone";
import { getPublicUrl } from "../../utils/utils";
import { Message } from "../../components/message/Message";

const musicTxt = `👆 قطعه "اسارت" رو میتونی از این بالا گوش بدی. 
<br/>
💽 این قطعه‌ای از موسیقی متن چه فیلمیه؟`;

export const DuelMusic = () => {
  return (
    <>
      <Gramophone src={getPublicUrl("assets/levels/duel/duel.mp3")} />
      <Message text={musicTxt} style={{ transform: "translateY(-40px)" }} />
    </>
  );
};
