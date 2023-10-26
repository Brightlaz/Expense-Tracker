import React from "react";
import { Outlet } from "react-router-dom";


const PrimaryLayout = () => {
  return (
    <div className="relative flex flex-col justify-center w-screen min-h-screen ">
      
        <Outlet />
    </div>
  );
};

export default PrimaryLayout;
