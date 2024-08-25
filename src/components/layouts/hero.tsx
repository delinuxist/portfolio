"use client";
import Image from "next/image";
import React from "react";
import memojiImage from "@/assets/images/memoji-computer.png";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import RetroGrid from "@/components/magicui/retro-grid";

const Hero = () => {
  return (
    <div className='py-32 min-h-screen w-full flex items-center justify-center overflow-x-clip relative'>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} alt='Memo image' className='size-[100px]' />

          <div className='bg-muted border rounded-lg px-4 py-1.5 inline-flex items-center gap-4'>
            <div className='size-2.5 bg-green-500 rounded-full' />
            <div className=' text-sm font-medium'>
              Available for new projects
            </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className=' font-calistoga text-3xl text-center mt-8 tracking-wide md:text-5xl'>
            Building Exceptional User Experiences
          </h1>
          <p className='mt-4 text-center text-muted-foreground md:text-lg'>
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>

        <div className='flex flex-col items-center mt-8 gap-4 md:flex-row justify-center'>
          <Button variant={"outline"}>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4 ml-2' />
          </Button>
          <Button>
            <span className='mr-2'>👋🏼</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </Button>
        </div>
      </div>
      <RetroGrid className='-z-30' />
    </div>
  );
};

export default Hero;
