import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './MagicButton'
import Items from './Items'
// import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { FaSquareGithub } from 'react-icons/fa6'





function Hero() {
  // const name = [
  //   {
  //   text:"I'm"
  //   },
  //   {
  //     text: "John",
  //   },
  //   {
  //     text: "Orland",
  //   },
  //   {
  //     text: "Sudoy",
  //     className: "text-xl text-blue-400 dark:text-blue-400 light:text-400",
  //   },
  // ];
  return (

<div className='pb-20 pt-36'>
    <div>
      <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 
      h-screen' fill="white"/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill="green"/>
        <Spotlight className='top-30 left-80 h-[80vh] w-[50vh]' fill="white"/>
    </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

    <div className='flex justify-center relative my-20 z-index'>
       <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
       <div className='uppercase tracking-widest text-center text-green-100 max-w-[89vw]'>
       {/* <TypewriterEffectSmooth words={name}  />   */}

           <TextGenerateEffect
           className=" text-center text-[40px] md:text-5xl lg:text-6xl font-bold text-white"
           words="I'm a Web  developer and designer"
           />
           <p className='text-center md:tracking-wider mb-4 text-sm md-:text-lg lg:text-2xl'>
            I'm Exited to work with your team and help you build a great product.
           </p>
           <div className='mt-10 flex justify-center items-center'>
            <div className='m-4' >
              <a href="https://github.com/johnorland24/" className='text-2xl'><FaSquareGithub/></a>
            </div>
           <a href="#work" >
            <MagicButton 
            title="Show my work" 
            icon= {<FaLocationArrow/>}   
            position='right'
             />
             </a>
           </div> 
        </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Hero
