import React from 'react';
import {Link} from 'react-scroll'


export default function Navbar(){
    return(
        <header className="fixed top-0 left-0 w-screen p-3 h-16 z-10 whitespace-nowrap
                            flex justify-between bg-white shadow-lg align-middle">
            <div className="flex items-center">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-64}>
                    <button className="navbar-items font-medium flex items-center">
                        <h4>IW UGM</h4>
                    </button>
                </Link>
            </div>
            <div className="flex items-center">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-64}>
                    <button className="navbar-items">Home</button>
                </Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-64}>
                    <button className="navbar-items">About</button>
                </Link>   
                <Link activeClass="active" to="workshop" spy={true} smooth={true} offset={-64}>
                    <button className="navbar-items">Workshop</button>
                </Link>
                <Link activeClass="active" to="wpc" spy={true} smooth={true} offset={-64}>
                    <button className="navbar-items">WPC</button>
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-64}>
                    <button className="navbar-items">Contact</button>
                </Link>
                <a href="https://iwugm.com/#home" target="_blank" rel="noreferrer">
                    <button className="bg-blue text-white border-2 border-blue
                                        font-medium shadow-sm rounded-lg px-4 py-2 mx-4 ease-in-out duration-300
                                        hover:bg-white hover:text-blue hover:border-blue
                                        focus:text-white focus:bg-blue">
                        Register Now!
                    </button>
                </a>
            </div>
        </header>
    )
}