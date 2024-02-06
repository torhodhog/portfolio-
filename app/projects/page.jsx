"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { set } from "react-hook-form";

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

//remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((project) => project.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

const filterProjects = projectData.filter(project => {
  return category === 'all projects' ? project : project.category === category;
})

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Mine Prosjekter
        </h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="md-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  key={index}
                  className="capitalize x-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filterProjects.map((project, index) => {
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
