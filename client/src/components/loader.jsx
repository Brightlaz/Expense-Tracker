 
import React from "react";
import Logo from '../assets/ui/logo.svg'

const Loader = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Image
        src={Logo}
        alt="Logo Image"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Loader;
