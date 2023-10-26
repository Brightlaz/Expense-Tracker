import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashLayout = () => {
  return (
    <div className="flex-grow flex flex-col ">
      <div className="pb-12 flex-grow">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
};

export default DashLayout;
