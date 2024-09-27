import React from 'react'
import MagicButton from '../MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

function AbouteMe() {

    // const name = [
    //     {
    //         text: "I'm"
    //     },
    //     {
    //         text: "John",
    //     },
    //     {
    //         text: "Orland",
    //     },
    //     {
    //         text: "Sudoy",
    //         className: "text-blue-400 dark:text-blue-400 light:text-400",
    //     },
    // ];

    
    return (
        <section id="about" className='mb-10'>

            <figure className='md:flex bg-slate-200 rounded-2xl p-8 md:p-1 dark:bg-slate-800 border-dashed border-2 border-gray-500 '>
                <img src="/orland.png" alt="Profile Picture" className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' />
                <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
                    <blockquote>
                        <p className="text-lg font-medium text-pretty">
                            I'm a Junior web  developer and designer 
                            base in the Philippines.
                            I have a passion for creating beautiful and functional websites.
                            I'm always eager to learn new technologies and stay up-to-date with the latest industry trends.
                            I have worked on various projects and have recently started my journey as a Junior Developer.
                        </p>
                    </blockquote>
                    <figcaption className='font-medium '>
                        <h2 className="text-sm text-gray-600 text-center">
                            <div className='text-sky-950 dark:text-sky-800'>
                                John Orland Sudoy
                            </div>
                            <div className='text-xl text-slate-600 dark:text-slate-300'>
                                Junior Full stack dev
                            </div>
                            <div className='mt-3'>
                                <a href="johnOrlandSudoy.pdf" download="johnOrlandSudoy.pdf">
                                    <MagicButton
                                        title="Download CV"
                                        icon={<FaLocationArrow />}
                                        position='right'
                                    />
                                </a>
                            </div>
                        </h2>
                    </figcaption>
                </div>
            </figure>
        </section>
    )
}

export default AbouteMe
