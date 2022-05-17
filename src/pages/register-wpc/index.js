import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/globals.css';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Helmet } from "react-helmet"
import iwugm from "../../images/iwugm.webp";

export default function RegisterWPC(){
    return(
        <>
              <Helmet
                title="IW UGM 2022">
                <meta charSet="utf-8" />
                <title>WPC Registration</title>
                <link rel="icon" href={iwugm} />
            </Helmet>
            <Navbar showNav={false}/>
            <div className="absolute w-full overflow-x-hidden bg-white" >
                <section id="home" className="bg-[url('../images/city-bg.webp')] bg-cover min-h-screen w-full flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue to-red mb-10 ">
                        Are you registering in a team or individually?
                    </h1>
                    <div className='grid grid-rows-3 md:grid-cols-3 gap-1'>
                    <a href="/register-wpc/team" className='navbar-items shadow-2xl font-normal hover:font-medium text-white bg-blue hover:bg-gradient-to-r hover:from-blue hover:to-red p-2.5'>
                            Team Register
                    </a>
                    <a href="/register-wpc/individual" className='navbar-items shadow-2xl font-normal hover:font-medium text-blue border-2 border-blue hover:bg-gradient-to-r hover:from-blue hover:to-red p-2.5'>
                            Individual Register
                    </a>
                    <a href="/" className='text-xs shadow-2xl text-blue border-2 border-transparent hover:text-black font-normal hover:font-medium p-2.5 text-center rounded-md'>
                            Back to Home
                    </a>
                </div>
                </section>                          
                <Footer/>
            </div>
        </>
    )
}
