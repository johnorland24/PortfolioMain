import React from 'react';  
import MagicButton from '../MagicButton';  
import { FaLocationArrow } from 'react-icons/fa';  
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';  
import TeachTitle from '../TeachTitle';  
import Image from 'next/image';  
import { Fullstack } from '@/data';  

export default function Teachstack() {  
  const name = [  
    { text: "My" },  
    { text: "full" },  
    { text: "Stack" },  
    {  
      text: "Project",  
      className: "text-blue-400 dark:text-blue-400 light:text-400",  
    },  
  ];  

  return (  
    <section id='capstone'>  
      <TeachTitle />  
      {Fullstack.map((item, index) => (  
        <main key={item.id || index} className="py-6 px-4 sm:p-6 md:py-10 md:px-8">  
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">  
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">  
              <TypewriterEffectSmooth   
                words={name}   
                className='mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white'   
              />  
            </div>  
            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">  
              <Image src={item.img1} alt="" width={600} height={400} className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />  
              <Image src={item.img2} alt="" width={600} height={400} className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />  
              <Image src={item.img3} alt="" width={600} height={400} className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />  
            </div>  
            <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">  
              <a href={item.githubUrl}>  
                <MagicButton  
                  title="check my github repo"   
                  icon={<FaLocationArrow />}   
                  position='right'  
                />  
              </a>  
            </div>  
            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">  
              {item.description}  
            </p>  
          </div>  
        </main>  
      ))}  
    </section>  
  );  
}