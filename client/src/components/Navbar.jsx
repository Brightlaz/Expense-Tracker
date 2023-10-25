import React from "react";
import { navbar } from "../data/navItems";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      className="absolute bottom-0 left-0 flex justify-between w-full pl-5 pr-[17px] pt-[15px] pb-4"
      style={{ boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" }}
    >
      {navbar.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={`${
            location.pathname === item.path &&
            "pr-[19.16px] pl-[19px] py-[13px] bg-[#233DFF]"
          } bg-opacity-20 rounded-[20px] justify-center cursor-pointer items-center gap-2.5 inline-flex`}
        >
          <img
            src={location.pathname === item.path ? item.active : item.icon}
            alt={item.title}
            className="w-[22px] h-auto"
          />
          {location.pathname === item.path && (
            <div className="text-sm font-semibold text-[#233DFF]">
              {item.title}
            </div>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
