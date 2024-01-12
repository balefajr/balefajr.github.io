import React from "react";
import { Message } from "../../components/message/Message";
import sahmeManImg from "./assets/sahmeMan2.png";
import sahmeManRawImg from "./assets/sahmeMan.jpg";
import { Voice } from "../../components/voice/Voice";
import { getPublicUrl } from "../../utils/utils";

const sahmeManTxt = `👆 این صحنه مربوط به کدوم فیلمه؟ 🤔`;

export const HamoonSahmeManReal = () => (
  <div style={{ position: "relative" }}>
    <Voice
      style={{ position: "absolute", zIndex: 1, top: "29px", left: "20px" }}
      src={getPublicUrl("assets/levels/hamoon/sahmeMan.mp3")}
    />
    <img
      src={sahmeManImg}
      style={{
        width: "80%",
        transform: "translate(-5px,15px)",
      }}
    />
    <Message text={sahmeManTxt} />
  </div>
);

export const HamoonSahmeMan = () => (
  <Message imgSrc={sahmeManRawImg} text={sahmeManTxt} />
);
