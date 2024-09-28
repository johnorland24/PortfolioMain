"use client";  

import Image from "next/image";  
import React from "react";  
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";  
import MagicButton from "./MagicButton";  
import { FaLocationArrow, FaSquareGithub } from "react-icons/fa6";  
import { capstone } from "@/data";  

export function ThreeDCardDemo() {  
  return (  
    <div className="mt-10" id="static">  
      <h1 className="relative z-10 text-lg md:text-6xl max-w-screen-md:hidden bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">  
        My Custom Project in React-Js with tailwind css.  
      </h1>  
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"></p>  
      {capstone.map((item, index) => (  
        <CardContainer className="inter-var" key={item.id || index}> {/* Added key prop here */}  
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">  
            <CardItem   
              translateZ="50"   
              className="text-xl font-bold text-neutral-600 dark:text-white"  
            >  
              {item.title}  
            </CardItem>  
            <CardItem   
              as="p"   
              translateZ="60"   
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"  
            >  
              {item.description}  
            </CardItem>  
            <CardItem translateZ="100" className="w-full mt-4">  
              <img  
                src={item.image}  
                height="1000"  
                width="1000"  
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"  
                alt="thumbnail"  
              />  
            </CardItem>  
            <div className="flex justify-between items-center mt-20">  
              <a href={item.url} className='m-3'>  
                <MagicButton  
                  title="Live demo"   
                  icon={<FaLocationArrow />}   
                  position='right'  
                />  
              </a>  

              <a href={item.gitUrl} className='m-3 flex items-center justify-center'>  
                <MagicButton  
                  title="repo"   
                  icon={<FaSquareGithub />}  
                  position='right'  
                />  
              </a>  
            </div>  
          </CardBody>  
        </CardContainer>  
      ))}  
    </div>  
  );  
}