import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

function TeachTitle() {
  return (
    <div>
      <TextGenerateEffect
           className=" text-center text-[40px] md:text-5xl lg:text-6xl font-bold text-white"
           words="My Full stack Project Using Amazing Technologies"
           />
    </div>
  )
}

export default TeachTitle
