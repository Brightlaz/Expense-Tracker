import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrimaryLayout = () => {
  return (
    <div className="flex flex-col justify-center w-screen min-h-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PrimaryLayout;
