import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-scroll'
import { FaTimes, FaBars } from 'react-icons/fa';

export default function Navbar({
    showNav=true,
    }){
    // is navbar button hamburger or times?
    const [isClicked, setIsClicked] = useState(false); 
    // is navbar items displaying? (on mobile)
    const [itemDisplay, setItemDisplay] = useState(false);
    // is navbar has shadow?
    const [navbarShadow, setNavbarShadow] = useState(false)
    const handleClick = () => {
        setIsClicked(!isClicked)
        setItemDisplay(!itemDisplay)
    }

    const changeShadow = () => {
        if (window.scrollY >= 50) {
          setNavbarShadow(true)
        } else {
          setNavbarShadow(false)
        }
      }
    
      useEffect(() => {
        changeShadow()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeShadow)
      },)

    return(
        <header className={`fixed top-0 left-0 w-screen p-0 lg:p-3 h-9 lg:h-16 z-10 whitespace-nowrap
                            flex justify-between items-center ${navbarShadow ? 'shadow-lg bg-white' : ''}
                            transition-all duration-100 ease-in-out`}>
            <div className="flex items-center">
                <a href='/' className='navbar-items flex items-center text-base lg:text-lg font-semibold rounded-md px-3 py-0'>
                    <StaticImage 
                        src='../images/iwugm.webp'
                        alt="logo iwugm22"
                        layout="fixed"
                        width={32}
                        placeholder='none'
                    />
                    &nbsp;
                    IW UGM
                </a>
            </div>
            <div className={`p-1 px-4 mx-3 rounded-lg font-light text-xs hover:text-blue lg:hidden ${showNav ? 'block' : 'hidden'}`}>
                {isClicked ? <FaTimes onClick={handleClick} className='text-blue cursor-pointer transition-all ease-in-out duration-1000'/> : <FaBars onClick={handleClick} className='cursor-pointer'/>}
            </div>
            {showNav && <div className={`${itemDisplay ? 'block' : 'hidden'} bg-white lg:bg-transparent lg:block items-center w-full lg:w-auto flex flex-col absolute left-0 top-9 lg:top-16 lg:flex-row lg:static transition-all duration-500 ease-in-out`}>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-64} className='w-full lg:w-auto' onClick={handleClick}>
                   <button className='navbar-items'>Home</button>
                </Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-64} className="w-full lg:w-auto" onClick={handleClick}>
                    <button className='navbar-items'>About</button>
                </Link>   
                <Link activeClass="active" to="wpc" spy={true} smooth={true} offset={-64} className="w-full lg:w-auto" onClick={handleClick}>
                    <button className='navbar-items'>WPC</button>
                </Link>
                <Link activeClass="active" to="workshop" spy={true} smooth={true} offset={-64} className="w-full lg:w-auto" onClick={handleClick}>
                    <button className='navbar-items'>Workshop</button>
                </Link>
                <Link activeClass="active" to="seminar" spy={true} smooth={true} offset={-64} className="w-full lg:w-auto" onClick={handleClick}>
                    <button className='navbar-items'>Seminar</button>
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-64} className="w-full lg:w-auto" onClick={handleClick}>
                    <button className='navbar-items'>Contact</button>
                </Link>
                <a href="/register" className='navbar-items shadow-2xl font-medium text-white bg-blue hover:bg-gradient-to-r hover:from-blue hover:to-red py-2' onClick={handleClick}>
                        Register
                </a>
            </div>}
        </header>
    )
}