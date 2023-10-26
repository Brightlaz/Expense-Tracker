import React from "react";
import card from "../../assets/card.png";
import open from "../../assets/Frame 33.png";

import state from "../../store";

export const CardComp = () => {
  return (
    <div className="px-[22px] flex-grow pt-5 pb-[130px]">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-black text-2xl font-semibold leading-[41.17px]">
          Card
        </h1>
      </div>
      <img src={card} alt="card" className="w-full h-auto" />
      <div
        className="absolute right-8 bottom-28 cursor pointer"
        onClick={() => (state.isNewCard = true)}
      >
        <img
          src={open}
          alt="Budget Image"
          className="w-[73px] h-auto"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};
