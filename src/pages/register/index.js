import '../../styles/globals.css';
import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SEO from '../../components/Seo';

export default function RegisterWPC(){
    useEffect(() => {
        window.scrollTo(0,0);
      }, [])
    return(
        <>
            <SEO
                title='White Paper Competition Registration'
            />
            <Navbar showNav={false}/>
            <div className="absolute w-full overflow-x-hidden bg-white" >
                <section id="home" className="bg-[url('../images/city-bg.webp')] bg-cover min-h-screen w-full flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue to-red mb-10 "
                                          data-sal="zoom-in"
                                          data-sal-duration="500"
                                          data-sal-easing="ease">
                        Are you registering for workshop or seminar?
                    </h1>
                    <div className='grid grid-rows-2 md:grid-cols-2 gap-x-1 gap-y-4'
                                          data-sal="zoom-in"
                                          data-sal-duration="500"
                                          data-sal-easing="ease">
                        <a href="/register/workshop" className='navbar-items shadow-2xl font-normal hover:font-medium text-white bg-blue hover:bg-gradient-to-r hover:from-blue hover:to-red p-2.5'>
                                Register for Workshop
                        </a>
                        <a href="/register/seminar" className='navbar-items shadow-2xl font-normal hover:font-medium text-blue border-2 border-blue hover:bg-gradient-to-r hover:from-blue hover:to-red p-2.5'>
                                Register for Seminar
                        </a>
                        <a href="/" className='md:col-span-2 text-xs shadow-2xl text-blue border-2 border-transparent hover:text-black font-normal hover:font-medium p-2.5 text-center rounded-md'>
                                Back to Home
                        </a>
                </div>
                </section>                          
                <Footer/>
            </div>
        </>
    )
}
