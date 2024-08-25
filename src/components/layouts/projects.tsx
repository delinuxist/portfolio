import React from "react";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2Icon } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

const Projects = () => {
  return (
    <section className='py-16 md:py-24'>
      <div className='container'>
        <div className='flex justify-center'>
          <p className='uppercase font-semibold text-center tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent'>
            Real-worl Projects
          </p>
        </div>

        <h2 className='font-calistoga text-3xl md:text-5xl mt-6 text-center'>
          Featured Projects
        </h2>
        <p className='text-center text-muted-foreground mt-4 md:text-lg mx-auto max-w-md lg:text-xl'>
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className='flex flex-col mt-10 md:mt-20 gap-20'>
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className=" bg-card rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 z-0 after:rounded-3xl after:outline-muted-foreground after:z-10 overflow-hidden px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div
                className='absolute inset-0 -z-10 opacity-5'
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              />
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='uppercase font-bold text-center text-sm  tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  bg-clip-text text-transparent inline-flex gap-2'>
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className=' font-calistoga text-2xl mt-2 md:mt-5 md:text-4xl'>
                    {project.title}
                  </h3>
                  <hr className='border-t-2 my-4 md:my-5 border-muted-foreground' />
                  <ul className='flex flex-col gap-4'>
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className='flex gap-2 text-sm md:text-base text-muted-foreground items-center'
                      >
                        <CheckCircle2Icon className='size-5 md:size-6' />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <Button className='font-semibold w-full mt-8 md:w-auto'>
                      View Live Site <ArrowUpRight className='size-4 ml-2' />
                    </Button>
                  </a>
                </div>
                <div className='relative'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className='mt-8 lg:mt-0 lg:absolute h-full lg:w-auto lg:max-w-none'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
