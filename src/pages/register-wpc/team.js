import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Helmet } from "react-helmet"
import iwugm from "../../images/iwugm.webp";
import '../../styles/globals.css';

export default function RegisterWPCTeam(){
    return(
        <>
            <Helmet
                title="IW UGM 2022">
                <meta charSet="utf-8" />
                <title>WPC Team Registration</title>
                <link rel="icon" href={iwugm} />
            </Helmet>
            <Navbar showNav={false}/>
            <div className="absolute w-full overflow-x-hidden bg-white" >
                <section id="home" className="bg-[url('../images/city-bg.webp')] bg-contain min-h-screen flex flex-col items-center justify-center px-0">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf32uRyHcm_lpHIXIL7b3C0l0Rvy8q_kMK-XK_oMwrGGekpyQ/viewform?embedded=true" frameborder="0" scrolling="no"  marginheight="0" marginwidth="0" className='w-full h-[3350px] sm:h-[3050px]'>Loading…</iframe>                
                    <a href="/" className='navbar-items shadow-2xl font-normal hover:font-medium text-white border-2 bg-blue hover:bg-gradient-to-r hover:from-blue hover:to-red p-2.5 w-fit'>
                        Back Home
                    </a>
                </section>                          
                <Footer/>
            </div>
        </>
    )
}
