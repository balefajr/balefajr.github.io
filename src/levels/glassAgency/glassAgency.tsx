import React from "react";
import { Message } from "../../components/message/Message";
import directorRawImg from "./assets/director.jpg";

const directorTxt =
  "اسم کارگردان این فیلم که در تصویر بالا هم دیده میشه چیه؟ 🎬";

export const GlassAgencyDirector = () => {
  return <Message imgSrc={directorRawImg} text={directorTxt} />;
};
