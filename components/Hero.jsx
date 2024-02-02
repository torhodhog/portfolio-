import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
   RiBriefcase4Fill,
   RiTeamFill,
   RiTodoFill,
   RiArrowDownSLine, // corrected here
} from 'react-icons/ri';

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
   <section className="">
         <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
               {/* text */}
               <div>text</div>
               {  /* image */}
               <div>image</div>   
            </div>
            {/* icon */}
            <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
               <RiArrowDownSLine className='text-3xl text-primary' /> {/* corrected here */}
            </div>
         </div>
   </section>
  )
};

export default Hero;