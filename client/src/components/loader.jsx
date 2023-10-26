import React from "react";
import Logo from '../assets/ui/logo.svg'

import 'animate.css';

const Loader = () => {
  return (
    <div className="flex-grow flex w-full h-full items-center justify-center">
      <img
        src={Logo}
        className="animate__animated animate__bounce animate__infinite"
      />
    </div>
  );
};

export default Loader;