import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import './Grid.css'
import TitleSkill from './TitleSkill'

const Grid = () => {
  return (
    <section id="work"  >
    <div className='mt-10'>

      <BentoGrid>
          {gridItems.map
          ((item) => (
           <BentoGridItem
           id= {item.id}
           key={item.id}
           title={item.title}
           description={item.description}
           image={item.image}
           linkurl={item.linkurl}
           imageAlt={item.imageAlt}
           />
          ))}
      </BentoGrid>
    </div>
    </section>
  )
}

export default Grid
