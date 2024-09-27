"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Features } from "@/data";


export function InfiniteMovingCardsDemo() {
    return (
        <section className="mt-10">
            <div className="mb-auto">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Other Features And Technologies I've Used and My stack
                </h1>

            </div>
            <InfiniteMovingCards
                items={Features}
                direction="right"
                speed="slow"
            />
        </section>
    );
}

