import React from "react";
import { Message } from "../../components/message/Message";
import fatherRawImg from "./assets/father.png";
import { getPublicUrl } from "../../utils/utils";

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
