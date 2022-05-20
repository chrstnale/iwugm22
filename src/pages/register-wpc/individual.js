import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Helmet } from "react-helmet"
import iwugm from "../../images/iwugm.webp";
import '../../styles/globals.css';

export default function RegisterWPCTeam(){
    useEffect(() => {
        window.scrollTo(0,0);
      }, [])
    return(
        <>
            <Helmet
                title="IW UGM 2022">
                <meta charSet="utf-8" />
                <title>WPC Individual Registration</title>
                <link rel="icon" href={iwugm} />
            </Helmet>
            <Navbar showNav={false}/>
            <div className="absolute w-full overflow-x-hidden bg-white" >
                <section id="home" className="bg-[url('../images/city-bg.webp')] bg-contain min-h-screen w-full flex flex-col items-center justify-center px-0">
                    <iframe title='form wpc individu' src="https://docs.google.com/forms/d/e/1FAIpQLScMiJkYz7RS6mMPViK2oZz2nZSygzXsmE8axa62CzkVWxZxsA/viewform?embedded=true" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className='w-full h-[1600px] sm:h-[1600px]'>Loading…</iframe>
                    <a href="/" className='navbar-items shadow-2xl font-normal hover:font-medium text-white border-2 bg-blue hover:bg-gradient-to-r hover:from-blue hover:to-red p-2.5 w-fit'>
                        Back Home
                    </a>
                </section>                          
                <Footer/>
            </div>
        </>
    )
}
