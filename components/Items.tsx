

import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

const people = [
    {
      id: 1,
      name: "tailwind",
      designation: "UI",
      image: '/tailwind.svg' 
    },
    {
      id: 2,
      name: "React",
      designation: "library",
      image: '/react1.svg'
    },
    {
      id: 3,
      name: "Typescript",
      designation: "super set js",
       image: '/ts.svg' 
    },
    {
      id: 4,
      name: "html",
      designation: "structure",
      image: '/html.svg'
    },
    {
      id: 5,
      name: "cascading styles sheet",
      designation: "style",
      image: '/css.svg'
    },
    {
      id: 6,
      name: "javascript",
      designation: "Programming L",
      image: '/js.svg'
    },
    {
      id: 7,
      name: "Msql",
      designation: "Database",
      image: '/mysql.svg'
    },
    {
      id: 8,
      name: "Php",
      designation: "Programming L",
      image: '/php.svg'
    },
    {
      id: 9,
      name: "Laravel",
      designation: "Frame work",
      image: '/laras.svg'
    },
    {
      id: 10,
      name: "Canva",
      designation: "Editor",
      image: '/canva-1.svg'
    },
  ];
function Items() {
    return (
        <div className='mt-10'>
             <div className="flex flex-row items-center justify-center mb-10 w-full">
             <AnimatedTooltip items={people} />
             </div>
        </div>
    )
}
export default Items
