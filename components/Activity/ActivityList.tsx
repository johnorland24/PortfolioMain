import { HoverEffect } from "../ui/card-hover-effect";


export function ActivityList() {
    return (
        <section id="activity">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                All Basic Activities I've Done
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                That is all the activities I've done from bootcamp in KodeGo
                to enhance my knowledge and skills in web development.
                to familiarize with javascript, html, css, and tailwind css.
                I've learned a lot from this experience and I'm excited to continue learning and working with the community.
            </p>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </section>
    );
}
export const projects = [

    {
        title: " First Activity In Html",
        description:
            "Its my first html page.",
        link: "https://johnorland24.github.io/Wwwhtmlpractice/",
    },
    {
        title: "Second Activity ",
        description:
            "This is my second Activity from bootcamp I learned Using ,html and css 😁 ",
        link: "https://johnorland24.github.io/Myprofile/",
    },
    {
        title: "Third Activity",
        description:
            "This is my third Activity  I learned how create table in html and css  😁 ",
        link: "https://johnorland24.github.io/Myfirstpages/",
    },
    {
        title: "Creating Resume",
        description:
            " I Learn How to use some html tag and how Intigrate use simple media queries for responsive  😁 ",
        link: "https://johnorland24.github.io/ResumeOrland2024/",
    },
    {
        title: "My firts Postfolio",
        description:
            " In  this moment I learned how to use html and css  So My last project in html and css is creating Portfolio ",
        link: "https://johnorland24.github.io/myfirstportfolio/",
    },
    {
        title: "To do list",
        description:
            "This is my first Activity from bootcamp I learned Using JS ,html and css",
        link: "https://johnorland24.github.io/TodolistApp/",
    },
    {
        title: "Pokemon Images",
        description:
            "This is my second Activity from bootcamp I learned Using JS ,html and css fetching images from an api of pokemon",
        link: "https://johnorland24.github.io/phase3/",
    },
    {
        title: "Bootsrap Portfolio",
        description:
            " This is My last project in bootstrap I create Postfolio to familiarize my skill in bootstrap",
        link: "https://johnorland24.github.io/updatedportfoliobootstrap/",
    },

];
