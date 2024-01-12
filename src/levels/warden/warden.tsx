import React from "react";
import { Message } from "../../components/message/Message";
import { getPublicUrl } from "../../utils/utils";
import gallowsRawImg from "./assets/gallows.jpg";

const gallowsTxt = "این سکانس رو تو چه فیلمی دیدی؟ 📽️";

export const WardenGallows = () => {
  return (
    <Message
      imgSrc={gallowsRawImg}
      videoSrc={getPublicUrl("assets/levels/seperation/father.mp4")}
      text={gallowsTxt}
    />
  );
};
