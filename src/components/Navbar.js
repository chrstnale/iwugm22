import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import {Link} from 'react-scroll'
import { FaTimes, FaBars } from 'react-icons/fa';

export default function Navbar(){
    const [isClicked, setIsClicked] = useState(false); 
    const [itemDisplay, setItemDisplay] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked)
        setItemDisplay(!itemDisplay)
    }

    return(
        <header className="fixed top-0 left-0 w-screen p-3 h-16 z-10 whitespace-nowrap
                            flex justify-between bg-white shadow-lg items-center">
            <div className="flex items-center">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-64} className='navbar-items flex items-center text-lg font-semibold rounded-md px-3'>
                    <StaticImage 
                        src='../images/iwugm.png'
                        alt="logo iwugm22"
                        layout="fixed"
                        width={32}
                    />
                    &nbsp;
                    IW UGM
                </Link>
            </div>
            <div className='p-1 px-4 ease-in-out duration-1000 mx-3 rounded-lg font-light text-xs md:text-sm hover:text-blue md:hidden'>
                {isClicked ? <FaTimes onClick={handleClick} className='text-blue cursor-pointer'/> : <FaBars onClick={handleClick} className='cursor-pointer'/>}
            </div>
            <div className={`${itemDisplay ? 'block' : 'hidden'} md:block items-center w-full md:w-auto flex flex-col absolute left-0 top-16 md:flex-row md:static transition-all duration-200 ease-in-out`}>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-120} className='navbar-items' onClick={handleClick}>
                    Home
                </Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-64} className="navbar-items" onClick={handleClick}>
                    About
                </Link>   
                <Link activeClass="active" to="workshop" spy={true} smooth={true} offset={-64} className="navbar-items" onClick={handleClick}>
                    Workshop
                </Link>
                <Link activeClass="active" to="wpc" spy={true} smooth={true} offset={-64} className="navbar-items" onClick={handleClick}>
                    WPC
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-64} className="navbar-items" onClick={handleClick}>
                   Contact
                </Link>
                <a href="https://iwugm.com/#home" target="_blank" rel="noreferrer" className='navbar-items font-medium text-white bg-blue hover:bg-gradient-to-tr hover:from-blue hover:to-red py-2' onClick={handleClick}>
                        Register Now!
                </a>
            </div>
        </header>
    )
}