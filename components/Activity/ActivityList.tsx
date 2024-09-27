import { HoverEffect } from "../ui/card-hover-effect";  

export function ActivityList() {  
    return (  
        <section id="activity">  
            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">  
                All Basic Activities I&apos;ve Done  
            </h1>  
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">  
                That is all the activities I&apos;ve done from bootcamp in KodeGo to enhance my knowledge and skills in web development. To familiarize with JavaScript, HTML, CSS, and Tailwind CSS. I&apos;ve learned a lot from this experience and I&apos;m excited to continue learning and working with the community.  
            </p>  
            <div className="max-w-5xl mx-auto px-8">  
                <HoverEffect items={projects} />  
            </div>  
        </section>  
    );  
}  

export const projects = [  
    {  
        title: "First Activity In HTML",  
        description: "It&apos;s my first HTML page.",  
        link: "https://johnorland24.github.io/Wwwhtmlpractice/",  
    },  
    {  
        title: "Second Activity",  
        description: "This is my second Activity from bootcamp I learned using HTML and CSS 😁",  
        link: "https://johnorland24.github.io/Myprofile/",  
    },  
    {  
        title: "Third Activity",  
        description: "This is my third Activity I learned how to create a table in HTML and CSS 😁",  
        link: "https://johnorland24.github.io/Myfirstpages/",  
    },  
    {  
        title: "Creating Resume",  
        description: "I learned how to use some HTML tags and how to integrate simple media queries for responsiveness 😁",  
        link: "https://johnorland24.github.io/ResumeOrland2024/",  
    },  
    {  
        title: "My First Portfolio",  
        description: "In this moment I learned how to use HTML and CSS. So my last project in HTML and CSS is creating a portfolio.",  
        link: "https://johnorland24.github.io/myfirstportfolio/",  
    },  
    {  
        title: "To Do List",  
        description: "This is my first Activity from bootcamp I learned using JS, HTML, and CSS.",  
        link: "https://johnorland24.github.io/TodolistApp/",  
    },  
    {  
        title: "Pokemon Images",  
        description: "This is my second Activity from bootcamp I learned using JS, HTML, and CSS fetching images from an API of Pokemon.",  
        link: "https://johnorland24.github.io/phase3/",  
    },  
    {  
        title: "Bootstrap Portfolio",  
        description: "This is my last project in Bootstrap I created a portfolio to familiarize myself with my skills in Bootstrap.",  
        link: "https://johnorland24.github.io/updatedportfoliobootstrap/",  
    },  
];