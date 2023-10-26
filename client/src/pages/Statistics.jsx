import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";

import statistics from "../assets/statistics.png";
import {
  useNavigate,
  // Link,
  // useLocation
} from "react-router-dom";
import { useSendLogoutMutation } from "../auth/authApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBell,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import TotalBalance from "../components/TotalBalance";

const Statistics = () => {
  return (
    <div className="flex-grow pt-5">
      <h1 className="text-center text-2xl font-semibold leading-[41.17px] flex justify-center w-full">
        Statistics
      </h1>
      <div className="bg-white">
        <TotalBalance />
      </div>
      <main className="px-4 mt-4 space-y-[19px]">
        <div className="flex justify-between gap-4">
          {/* Income */}
          <section className="flex flex-col  w-1/2 rounded-2xl bg-white">
            <div className="ml-auto transform -translate-y-2 translate-x-2  bg-green-200 px-6 py-4 rounded-full">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-green-500 text-2xl"
              />
            </div>
            <div className="pl-2">
              <p className="mt-2">Income:</p>
              <p className="text-2xl font-bold mb-2">+#300,000</p>
            </div>
          </section>
          {/* Expenditure*/}
          <section className="flex flex-col w-1/2 rounded-2xl bg-white">
            <div className="ml-auto transform -translate-y-2 translate-x-2 bg-red-200 px-6 py-4 rounded-full">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-red-500 text-2xl"
              />
            </div>
            <div className="pl-2">
              <p className="mt-2">Income:</p>
              <p className="text-2xl font-bold mb-2">-#70,000</p>
            </div>
          </section>
        </div>
        <img src={statistics} alt="statistics" className="w-full h-auto" />
      </main>
    </div>
  );
};

export default Statistics;
