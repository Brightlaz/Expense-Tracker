import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrimaryLayout = () => {
  return (
    <div className="relative flex flex-col justify-center w-screen min-h-screen ">
      <Navbar />
      <div className="pb-10">
        <Outlet />
      </div>
    </div>
  );
};

export default PrimaryLayout;
