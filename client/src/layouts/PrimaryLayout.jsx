import React from "react";
import { Outlet } from "react-router-dom";
import OnlySuitableOnMobile from "../components/OnlySuitableOnMobile"; // Import your mobile-specific component

const PrimaryLayout = () => {
  const isMobile = window.innerWidth >= 450;

  return (
    <div className="relative flex flex-col justify-center w-screen min-h-screen">
      {isMobile ? (
        <OnlySuitableOnMobile />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default PrimaryLayout;
