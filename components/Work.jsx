"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react.js",
    name: "Nexa Website",
    description:
      "Nexa is a website for a digital agency. It is built with React.js and Tailwind CSS. It is a fully responsive website.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next.js",
    name: "Nexa Website",
    description:
      "Nexa is a website for a digital agency. It is built with React.js and Tailwind CSS. It is a fully responsive website.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next.js",
    name: "Ignite Website",
    description:
      "Nexa is a website for a digital agency. It is built with React.js and Tailwind CSS. It is a fully responsive website.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react.js",
    name: "Lumina Website",
    description:
      "Nexa is a website for a digital agency. It is built with React.js and Tailwind CSS. It is a fully responsive website.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react.js",
    name: "Nexa Website",
    description:
      "Nexa is a website for a digital agency. It is built with React.js and Tailwind CSS. It is a fully responsive website.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Fullstack",
    name: "Even Website",
    description:
      "Nexa is a website for a digital agency. It is built with React.js and Tailwind CSS. It is a fully responsive website.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title b-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
      <div className="mt-16 xl:max-w-[1000px] xl:absolute right-0 top-0">
         <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
               640: {
                  slidesPerView: 2,
               },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
         >
            {projectData.slice(0.4).map((project, index) => {
               return (
                  <SwiperSlide key={index}>
                     <ProjectCard project={project} />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
      </div>
    </section>
  );
};

export default Work;
