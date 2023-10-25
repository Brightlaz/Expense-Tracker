import React from "react";
import Piggy from '../assets/ui/piggy.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import useTitle from "../hooks/useTitle";
import { useSignInQuery } from "../auth/authApiSlice";
import { toast } from "react-hot-toast";
import PulseLoader from 'react-spinners/PulseLoader'

const SignUp = () => {
  useTitle('SignUp');

  const { data, error, isLoading } = useSignInQuery()

  const GoogleSignUp = () => {
    if (isLoading) return; 

    signIn();
  };
  const signIn = async () => {
    try {
      const response = await queryFn(); 

      if (response?.data?.error) {
        toast.error('Error Signing Up');
      } else {
        toast.success('SignUp Successful');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error Signing Up');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <img
        src={Piggy}
        className="max-w-[250px] w-[80vw] "
        alt="Piggy Image"
      />
      <div className="text-center mt-2">
        <h2 className="font-bold text-xl">
          Create your account.
        </h2>
        <p className="text-gray-600">
          Sign up to get started
        </p>
      </div>
      <div
        className={`flex items-center px-3 py-2 mt-3 transition duration-300 hover:text-black border hover:border-black/40 rounded bg-primarypurple hover:border-primarypurple text-white ${isLoading && "opacity-50 cursor-not-allowed"
          }`}
        onClick={GoogleSignUp}
      >
        <FontAwesomeIcon
          icon={faGoogle}
          className="px-1 text-xl"
        />
        <span>
          {isLoading ?
            <PulseLoader className="text-white" />
            : "SignUp with Google"}
        </span>
      </div>
    </div>
  );
};

export default SignUp;
