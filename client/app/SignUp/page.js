import React from "react";
import Image from 'next/image';
import Piggy from '../assets/ui/piggy.svg';

const SignUp = () => {

  const handleSignInWithGoogle = () => {
    console.log("Signing in with Google");
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Image
        src={Piggy}
        alt="Piggy Image"
        width={200}
        height={200}
      />
      <section>
        <h2>
          Create your account
        </h2>
        <h4>
          Sign up via
        </h4>
      </section>
      <div className="mt-8">
        <button
          className="hover:bg-primary transition duration-300 font-bold py-2 px-4 rounded"
          onClick={handleSignInWithGoogle}
        >
          <b className="mr-1">G</b>Sign in with Google
        </button>
      </div>
    </div>
  );
};



export default SignUp;
