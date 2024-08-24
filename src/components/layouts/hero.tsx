import Image from "next/image";
import React from "react";
import memojiImage from "@/assets/images/memoji-computer.png";

const Hero = () => {
  return (
    <div>
      <div className='container'>
        <Image src={memojiImage} alt='Memo image' />
      </div>
    </div>
  );
};

export default Hero;
