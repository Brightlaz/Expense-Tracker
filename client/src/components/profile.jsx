import React from "react";
import profile from "../assets/profile.png";
import { profileItems } from "../data/profileItems";

const ProfileComp = () => {
  return (
    <div className="relative flex-grow px-[22px] pb-[130px]">
      <div className="w-full mb-[25px] flex flex-col pt-[49px] items-center">
        <h1 className="text-black text-2xl font-semibold leading-[41.17px] mb-[14px]">
          Profile
        </h1>
        <img className="w-[183px] h-auto" src={profile} />
        <h2 className="text-black text-2xl font-semibold leading-[41.17px]">
          John Abel
        </h2>
        <p className="text-black text-xl font-medium leading-[34.30px]">
          Johnabel123@gmail.com
        </p>
      </div>
      <div className="space-y-2">
        {profileItems.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white flex justify-start items-center rounded-[10px] gap-x-[31px] border-2 border-blue-700 pt-[18px] pl-[22px] pb-[13px] pr-[24px]"
          >
            <img src={item.icon} className="h-[18px] w-auto" alt={item.title} />
            <p className="text-black text-2xl font-semibold leading-[41.17px]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileComp;
