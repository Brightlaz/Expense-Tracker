// import dynamic from 'next/dynamic'

import React from "react";
import onboard from "../assets/onboards.png";
import logo from "../assets/logo 2.svg";
import vectorDown from "../assets/Vector.png";
import vectorUp from "../assets/Vector (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="px-[22px] min-h-screen relative pt-[78px] pb-[70px]">
      <div className="absolute -bottom-1 left-0">
        <img src={vectorDown} className="w-[483px] h-auto" alt="pattern icon" />
      </div>
      <div className="absolute top-1 right-0">
        <img
          src={vectorUp}
          className="h-[408.35px] w-auto"
          alt="pattern icon"
        />
      </div>
      <div className="flex justify-center w-full">
        <img src={logo} alt="logo" className="w-[177.68px] h-auto mb-[150px]" />
      </div>
      <img
        src={onboard}
        alt="onboard image"
        className="w-full h-auto mb-[72px]"
      />
      <p className="text-justify mb-[92px] text-black text-2xl font-medium leading-10">
        <span className="">Track every</span>
        <span className="text-blue-700"> expense</span>
        <span>, take charge of your finances, and watch your </span>
        <span className="text-blue-700">savings grow</span>
        <span> with</span>
        <span className="text-blue-700"> expentra.</span>
      </p>
      <Link
      to='/signup' 
      className="w-full relative flex flex-row bg-white justify-center items-center rounded-[10px] shadow-lg hover:bg-primary hover:text-white">
        <p className="flex-grow text-center font-medium ">Get Started</p>
        <div className="w-[93px] h-[75px] bg-primary flex justify-center items-center rounded-[10px]">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-white text-3xl"
          />
        </div>
      </Link>
    </main>
  );
}
