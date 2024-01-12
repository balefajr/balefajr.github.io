import React from "react";
import { Message } from "../../components/message/Message";
import { getPublicUrl } from "../../utils/utils";

const musicTxt = "این موسیقی متن متعلق به کدوم فیلمه؟ 🎵";

export const CubeOfSugarMusic = () => {
  return (
    <Message
      audioSrc={getPublicUrl("assets/levels/cubeOfSugar/cubeOfSugar.mp3")}
      text={musicTxt}
    />
  );
};
