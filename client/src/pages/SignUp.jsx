import React, { useState } from "react";
import Piggy from "../assets/ui/piggy.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import useTitle from "../hooks/useTitle";
import { toast } from "react-hot-toast";
import PulseLoader from "react-spinners/PulseLoader";
import { BASE_URL } from "../../constants";
import axios from "axios";

const SignUp = () => {
  useTitle("SignUp");

  const [isLoading, setIsLoading] = useState(false);

  const GoogleSignUp = async () => {
    try {
      if (isLoading) return;
      setIsLoading(true);

      const response = await axios.get(
        `https://expentra.onrender.com/v1/auth/login`
      );
      const { data } = response;

      window.location.href = response.data.data;
      // console.log(data);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      toast.error("Error Signing Up");
    } finally {
      setIsLoading(false);
    }
  };

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

  return (
    <div className="flex flex-col items-center justify-center">
      <img src={Piggy} className="max-w-[250px] w-[80vw] " alt="Piggy Image" />
      <div className="text-center mt-2">
        <h2 className="font-bold text-xl">Create your account.</h2>
        <p className="text-gray-600 text-sm">Sign up to get started</p>
      </div>
      <div
        className={`flex text-center justify-center min-w-[180px] hover:cursor-pointer items-center px-3 py-2 mt-3 transition duration-300 hover:text-black border hover:border-black/40 rounded bg-primarypurple hover:border-primarypurple text-white ${
          isLoading && "cursor-not-allowed min-w-[195px]"
        }`}
        onClick={GoogleSignUp}
      >
        <span>
          {isLoading ? (
            <PulseLoader className="text-white" size="8px" />
          ) : (
            <>
              <FontAwesomeIcon icon={faGoogle} className="px-1 text-xl" />{" "}
              SignUp with Google
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default SignUp;
