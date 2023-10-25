import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/ui/logo.svg'
import 'animate.css';

const Missing = () => {
  return (
    <div className="flex flex-col flex-grow w-full h-full text-center items-center justify-center">
      <img
        src={Logo}
        className="animate__animated animate__bounce animate__infinite"
        alt="Logo"
      />
      <p className="text-3xl mt-4 text-primary">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-lg mt-2 text-primary">
        Go back to <Link to="/" className="hover:underline text-orange-500  transition duration-300 hover:font-bold">home</Link>.
      </p>
    </div>
  )
}

export default Missing;
