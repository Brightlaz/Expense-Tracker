import React from "react";
import Image from 'next/image'
import Piggy from '../assets/ui/piggy.svg'

const SignUp = () => {
  return (
    <div>
      <Image
        src={Piggy}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        width={500}
        height={300}
      />
    </div>
  )
};

export default SignUp;
