import React from "react";
import Piggy from '../assets/ui/piggy.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignUp = () => {
  const GoogleSignUp=()=>{
    alert('Something is working')
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <img
        src={Piggy}
        className="sm:w-[300px] w-[80vw] "
      />
      <div
      className="flex items-center px-3 py-2 mt-3 transition duration-300 border border-black rounded hover:bg-primarypurple hover:border-primarypurple hover:text-white"
      onClick={GoogleSignUp}
      >
      <FontAwesomeIcon
      icon={faGoogle}
      className="px-1 text-xl"
      />
      <span>
        SignUp with Google
      </span>
      </div>
    </div>
  )
};

export default SignUp;
