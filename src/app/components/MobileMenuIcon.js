'use client'
import React from 'react'
import MobileMenu from "./MobileMenu";

 const MobileMenuIcon = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)

    const handleMobileMenu = () => {
        if (toggleMenu === false) {
            setToggleMenu(true);
            document.body.style.overflowY = 'hidden';
        } else {
            setToggleMenu(false);
            document.body.style.overflowY = 'auto';
        }
    } 

    return (
        <>
        <button aria-label="Mobile Menu" className="text-slate-600 w-2xl h-2xl block md:hidden" onClick={() => handleMobileMenu()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
        {toggleMenu === true
            ?<MobileMenu/>
            :<></>}
        </>
        
    )
}


export default MobileMenuIcon