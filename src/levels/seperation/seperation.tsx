import React from "react";
import { Message } from "../../components/message/Message";
import fatherRawImg from "./assets/father.png";
import { getPublicUrl } from "../../utils/utils";
import { Klaket } from "../../components/klaket/Klaket";

const fatherTxt = "این سکانس رو تو چه فیلمی دیدی؟ 📽️";

export const SeperationFather = () => {
  return (
    <Message
      imgSrc={fatherRawImg}
      videoSrc={getPublicUrl("assets/levels/seperation/father.mp4")}
      text={fatherTxt}
    />
  );
};

export const SeperationFatherReal = () => {
  return (
    <>
      <Klaket src={getPublicUrl("assets/levels/seperation/father.mp4")} />
      <Message text={fatherTxt} style={{ transform: "translateY(-10px)" }} />
    </>
  );
};
