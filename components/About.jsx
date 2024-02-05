import DevImg from './DevImg';
import Image from 'next/image';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from 'lucide-react';


const infoData = [
   {
      icon: <User2 size={20}/>,
      text: 'Torgeir Hodne-Høgheim',
   },
   {
      icon: <PhoneCall size={20}/>,
      text: '+47 92056241',
   },
   {
      icon: <MailIcon size={20}/>,
      text: 'hogheim@gmail.com',
   },
   {
      icon: <Calendar size={20}/>,
      text: 'Born on 20 Jul, 1990',
   },
   {
      icon: <GraduationCap size={20}/>,
      text: 'Front End Developer',
   },
   {
      icon: <HomeIcon size={20}/>,
      text: 'Helgeplasset 114, 5148 Fyllingsdalen',
   },
]

const qualificationData = [
   {
      title:  'education',
      dat: [
         {
            university: 'Høgskolen på Vestlandet',
            qualification: 'Bachelor, lærer, GLU 1-7',
            years: '2010-2014',
         },
         {
            university: 'Noroff institute of technology and Media',
            qualification: 'Back End Developer',
            years: '2023-2024'
         },
         {
            university: 'Gokstad Akademiet',
            qualification: 'Front End Developer',
            years: '2023-2025'
         },
      ]
   },
   {
      title:  'experience',
      dat: [
         {
            company: 'Bergen Kommune',
            qualification: 'Kontaklærer, 1-7. klasse',
            years: '2015-2023',
         },
       
      ]
   },
]

const skillData =[
   {
      title: 'skills',
      data: [
         {
            name: 'HTML, CSS',
         },
         {
            name: 'JavaScript',
         },
         {
            name: 'Node.js',
         },
         {
            name: 'Express.js',
         },
         {
            name: 'Next.js',
         },
         {
            name: 'React.js',
         },
      ]
   },
   {
      title: 'tools',
      data: [
         {
            imgPath: '/about/vscode.svg',
         },
         {
            imgPath: '/about/figma.svg',
         },
         {
            imgPath: '/about/notion.svg',
         },
         {
            imgPath: '/about/wordpress.svg',
         },
      ]
   },
]

const About = () => {
 
   const getData = (arr, title) => {
      return arr.find((item)=> item.title === title)
   };
 return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className="container mx-auto">
         <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About Me</h2>
         <div className='flex flex-col xl:flex-row'>
            {/* image */}
            <div className='hidden xl:flex flex-1 relative'>
               <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-ro-repeat relative' imgSrc='/hero/developer.png'/>
            </div>
            { /* tabs */}
            <div className='flex-1'>
               <Tabs defaultValue='personal'>
                  <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'> 
                     <TabsTrigger value='personal'>Info</TabsTrigger>
                     <TabsTrigger value='qualifications'>Qualification</TabsTrigger>
                     <TabsTrigger value='skills'>Skills</TabsTrigger>
                  </TabsList>
                  { /* tabs content */}
                  <div className='text-lg mt-12 xl:mt-8'>
                     {/* personal */}
                     <TabsContent value='personal'>personal info</TabsContent>
                     <TabsContent value='qualifications'>qualications info</TabsContent>
                     <TabsContent value='skills'>skills info</TabsContent>
                  </div>
               </Tabs>
            </div>
         </div>
      </div>
    </section>
  )
}

export default About

