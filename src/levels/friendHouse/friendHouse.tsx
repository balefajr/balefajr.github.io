import React from "react";
import { Message } from "../../components/message/Message";
import posterRawImg from "./assets/poster.jpg";
// import treeImg from "./assets/"

const posterTxt = "🌳 این پوستر چطور؟";

export const FriendHousePoster = () => {
  return <Message text={posterTxt} imgSrc={posterRawImg} />;
};

// export const FriendHouseTree = () => {
//   return (
//     <>
//       <img src={kiteImg} style={{ width: 250 }} />
//       <Message text={posterTxt} />
//     </>
//   );
// };
