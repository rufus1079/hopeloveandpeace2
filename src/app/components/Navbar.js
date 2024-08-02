import * as React from "react"
import MobileMenuIcon from "./MobileMenuIcon";
import Link from "next/link";


const NavBar = () => {

    return (
        <header className="container mx-auto my-auto flex justify-end py-3xl relative z-[35] md:static ">
            <nav >
                <ul className=" hidden md:flex items-center list-none ">
                    <li className="hover:text-violet-800 hover:bg-gray-300 px-sm py-xxs"><Link href="/">Home</Link></li>        
                    <li className="dropdown hover:text-violet-800 hover:bg-gray-300 px-sm py-xxs relative">
                        <button>Domestic Violence</button>
                        <ul className=" hidden dropdown-content absolute left-[0] z-10 bg-gray-300 whitespace-nowrap">
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="domestic">What is DA?</Link></li>
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="teachings">The Churches Teachings</Link></li>
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="signs">Potential Abuse Signs</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown hover:bg-gray-300  hover:text-violet-800 px-sm py-xxs relative">
                        <button>Safety</button>
                        <ul className=" hidden dropdown-content absolute left-[0] z-10 bg-gray-300 whitespace-nowrap">
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="plan">Safety Plan</Link></li>
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="help">Get Help</Link></li>
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="restraining">Restraining Order</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown hover:bg-gray-300 hover:text-violet-800 px-sm py-xxs relative">
                        <button>Prevention</button>
                        <ul className=" hidden dropdown-content absolute left-[0] z-10 bg-gray-300 whitespace-nowrap">
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="prevent">How To Prevent?</Link></li>
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="families">Healthy Families</Link></li>
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="teen">Teen Prevention</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown hover:bg-gray-300 hover:text-violet-800 px-sm py-xxs relative">
                        <button>Resources</button>
                        <ul className=" hidden dropdown-content absolute left-[0] z-10 bg-gray-300 whitespace-nowrap">
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="websites">Hotlines and Websites</Link></li>
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="resources">Catholic Information Resources</Link></li>
                            <li className="hover:text-violet-800 hover:bg-slate-100 text-[#000000] px-xs py-[0.25rem]"><Link href="publications">Recommended Publications</Link></li>
                        </ul>
                    </li>
                    <li className="hover:text-violet-800 hover:bg-gray-300 px-sm py-xxs"><Link href="about">About</Link></li> 

                </ul>
            </nav>
            <MobileMenuIcon/>
        </header>

        
    )
}

export default NavBar
