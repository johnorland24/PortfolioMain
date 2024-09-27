
import AbouteMe from "@/components/AboutMe/AbouteMe";
import { ActivityList } from "@/components/Activity/ActivityList";
import Footer from "@/components/Footer/Footer";

import Hero from "@/components/Hero";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { NavbarMenu } from "@/components/Navbar";
import Sooner from "@/components/Sooner/Sooner";
import Teachstack from "@/components/TeachStack/Teachstack";

import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";


export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavbarMenu />
        <Hero />
        <AbouteMe />
        <ActivityList />
        <ThreeDCardDemo />
        <section className="m-10">
          <Teachstack />
        </section>
        <Sooner />
        <InfiniteMovingCardsDemo />
        <Footer />
      </div>
    </main>
  );
}
