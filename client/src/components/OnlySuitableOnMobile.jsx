import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/ui/logo.svg'
import 'animate.css';

const OnlySuitableOnMobile = () => {
  return (
    <div className="flex flex-col flex-grow w-full h-full text-center items-center justify-center">
    <img
      src={Logo}
      className="animate__animated animate__bounce animate__infinite"
      alt="Logo"
    />
    <p className="text-xl mt-4 text-primary">
      Oops! <b>Expentra</b> is currently available for only mobile display.<br/> Please view this through a mobile phone.
    </p>
  </div>
  )
}

export default OnlySuitableOnMobile