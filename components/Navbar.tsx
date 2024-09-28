"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { CiLocationOn } from "react-icons/ci";
import { FcViewDetails } from "react-icons/fc";
import { MdOutlineEditNote } from "react-icons/md";

export function NavbarMenu() {
    return (
        <div className="relative w-full md:w-auto md:m-8 md:h-5 flex items-center justify-center">
            <Navbar className="top-2 h-10" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mb-10", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="About me">
                    <div className="flex flex-col space-y-4 text-sm">
                        <div className="flex items-center">
                            <FcViewDetails />
                            <HoveredLink href="#about">Download CV</HoveredLink>
                        </div>
                        <div className="flex  items-center">
                            <MdOutlineEditNote />
                            <HoveredLink href="#about">About Me</HoveredLink>
                        </div>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Project">
                    <div className="flex flex-col space-y-4 text-sm">
                        <div className="flex items-center">
                            <HoveredLink href="#activity">all activity</HoveredLink>
                        </div>
                        <div className="flex  items-center">
                          
                            <HoveredLink href="#static">React Project</HoveredLink>
                        </div>
                        <div className="flex  items-center">
                         
                            <HoveredLink href="#capstone">Capstone</HoveredLink>
                        </div>
                    </div>
                </MenuItem>
               
                <MenuItem setActive={setActive} active={active} item="Contact">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#contact">Email</HoveredLink>
                        <HoveredLink href="https://www.facebook.com/johnorland.sudoy.1">Messenger</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
