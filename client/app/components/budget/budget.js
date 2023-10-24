"use client";

import React from "react";
import { BudgetData } from "@/app/data/budgetItems";
import Image from "next/image";

const Budget = () => {
  return (
    <div className="px-[22px] w-full space-y-[19px] mt-[40px]">
      <h1 className="text-center text-2xl font-semibold leading-[41.17px] flex justify-center w-full">
        Budget
      </h1>
      <div className="space-y-[5px]">
        {BudgetData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start align-top space-x-4 w-full h-[97px] bg-white rounded-[10px] py-3 px-4 pr-2"
          >
            <Image
              src={item.icon}
              width={500}
              height={500}
              className="w-[72px] h-auto"
              alt="Picture of the author"
            />
            <div className="w-full relative">
              <div className="flex w-full align-top justify-between text-left">
                <h2 className="text-black text-xl font-semibold leading-[34.30px]">
                  {item.title}
                </h2>
                <div>
                  <h2 className="text-black text-xl font-semibold leading-[34.30px]">
                    {item.budget}
                  </h2>
                  <p className="text-neutral-400 text-right text-[15px] font-semibold leading-relaxed">
                    of {item.amount}
                  </p>
                </div>
              </div>
              <div className="w-full mt-[6px] h-[5px] bg-zinc-300 rounded-[10px]">
                <div className="h-full w-2/3 bg-blue-700 rounded-[10px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Budget;
