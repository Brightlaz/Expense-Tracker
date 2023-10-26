import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
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

const Dashboard = () => {
  // const { username, status, verified, isLoggedIn } = useAuth()

  const GoogleCallback = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://expentra.onrender.com/v1/auth/google/callback/`
      );
      const { data } = response;
      console.log(data);

      toast.success("SignUp Successful");
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error("Error in the named callback URL");
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(()=>{
  //   GoogleCallback()
  // },[])

  return (
    <div className="flex-grow">
      {/*User Info Tab */}
      <div className="bg-white">
        <div className="flex justify-between px-4 pt-3 items-center">
          <div className="bg-primary/30 px-4 py-3 rounded-full">
            <FontAwesomeIcon icon={faUser} size="lg" className="text-primary" />
          </div>
          {/* Name and Welcoming */}
          <div className="mr-auto ml-2 leading-none">
            <h2 className="font-bold">Hello Bright</h2>
            <p>Welcome Back</p>
          </div>
          {/* Bell */}
          <div>
            <FontAwesomeIcon icon={faBell} size="lg" className="text-primary" />
          </div>
        </div>
        <TotalBalance />
      </div>
      <main className="px-4 mt-4">
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
        {/* Recent Transactions */}
        <div className="flex flex-col px-1">
          <section className="flex justify-between items-end mt-4">
            <h2 className="font-bold text-xl">Recent Transactions</h2>
            <h4 className="text-primary">View all</h4>
          </section>
        </div>
        <aside className="flex flex-col">
          <section className="w-full h-20 bg-white rounded-xl justify-between flex items-center mt-2">
            <div className="rounded-md flex items-center justify-center px-5 py-4 ml-3 bg-green-200">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-green-500 text-2xl"
              />
            </div>
            <div className="mr-auto ml-6">
              <h2 className="font-bold">Salary</h2>
              <p className="text-gray-600">Oct 23,2023</p>
            </div>
            <div className="text-green-500 pr-2 text-lg font-bold">
              +#20,000
            </div>
          </section>
          <section className="w-full h-20 bg-white rounded-xl justify-between flex items-center mt-2">
            <div className="rounded-md flex items-center justify-center px-5 py-4 ml-3 bg-red-200">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-red-500 text-2xl"
              />
            </div>
            <div className="mr-auto ml-6">
              <h2 className="font-bold">Salary</h2>
              <p className="text-gray-600">Oct 23,2023</p>
            </div>
            <div className="text-red-500 pr-2 text-lg font-bold">-#16,000</div>
          </section>
          <section className="w-full h-20 bg-white rounded-xl justify-between flex items-center mt-2">
            <div className="rounded-md flex items-center justify-center px-5 py-4 ml-3 bg-red-200">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-red-500 text-2xl"
              />
            </div>
            <div className="mr-auto ml-6">
              <h2 className="font-bold">Airtime</h2>
              <p className="text-gray-600">Oct 23,2023</p>
            </div>
            <div className="text-red-500 pr-2 text-lg font-bold">-#2,000</div>
          </section>
          <section className="w-full h-20 bg-white rounded-xl justify-between flex items-center mt-2">
            <div className="rounded-md flex items-center justify-center px-5 py-4 ml-3 bg-green-200">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-green-500 text-2xl"
              />
            </div>
            <div className="mr-auto ml-6">
              <h2 className="font-bold">Side Hustle</h2>
              <p className="text-gray-600">Oct 22,2023</p>
            </div>
            <div className="text-green-500 pr-2 text-lg font-bold">
              +#30,000
            </div>
          </section>
          <section className="w-full h-20 bg-white rounded-xl justify-between flex items-center mt-2">
            <div className="rounded-md flex items-center justify-center px-5 py-4 ml-3 bg-red-200">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-red-500 text-2xl"
              />
            </div>
            <div className="mr-auto ml-6">
              <h2 className="font-bold">Rent</h2>
              <p className="text-gray-600">Oct 22,2023</p>
            </div>
            <div className="text-red-500 pr-2 text-lg font-bold">-#100,000</div>
          </section>
        </aside>
      </main>
    </div>
  );
};

export default Dashboard;
