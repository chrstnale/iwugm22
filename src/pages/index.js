import React from 'react';
import Navbar from "../components/Navbar";
import '../styles/globals.css';
import { Helmet } from "react-helmet"
import iwugm from "../images/iwugm.webp";
import { StaticImage } from 'gatsby-plugin-image';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
   <>
      <Helmet
        title="IW UGM 2022">
          <meta charSet="utf-8" />
          <title>IW UGM 2022</title>
          <link rel="icon" href={iwugm} />
      </Helmet>
      <Navbar/>
      <div className="absolute w-screen overflow-x-hidden bg-white" id="pages">
        <section id="home" className="bg-[url('../images/city-bg.webp')] bg-cover min-h-screen w-full flex flex-col md:flex-row items-center justify-center pl-8 md:pl-3"
          // data-sal="slide-up"
          // data-sal-duration="1000"
          // data-sal-easing="ease-in-out"
          ><StaticImage
              src='../images/iwugm.webp'
              alt="logo iwugm22"
              className='w-60 md:w-96 md:mr-4'
            />
            <h1 className="text-5xl md:text-7xl text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue to-red whitespace-nowrap">
                Industrial<br/>Workshop<br/><span className='font-light'>UGM 20<span className='font-semibold'>22</span></span>
            </h1>
            {/* <div className='absolute bottom-10 left-1/2 text-black h-fit'>
              <FaArrowAltCircleDown />
            </div> */}
          </section>
          
          <section id="about" className=" text-white bg-black flex flex-col md:flex-row w-full">
            <StaticImage
              src='../images/city-bg.webp'
              alt="logo iwugm22"
              className='w-full md:w-2/3 md:mr-4'
            />
            <div className='mt-8 ml-0 md:mt-0 md:ml-8'>
              <h2>About Us</h2>
              <p>Industrial Workshop is an annual event held by Himpunan Mahasiswa Teknik Industri Universitas</p>
              <br/>
              <p>
                This year is the 10th year of Industrial Workshop. The history of this event is started with Ernographic Design Workshop (EDW), which then became an annual workshop that discussing about current situation. Starting in 2019, industrial workshop made a branch event, White Paper Competition, and it is continued this year.
              </p>
              <br/>
              <h4>Supply Chain Instability</h4>
              <p>
                Industrial Workshop is an annual event held by Himpunan Mahasiswa Teknik Industri Universitas
              </p>
              <br/>
              <p>
                Industrial Workshop will be filled with international-scale White Paper Competition and workshop event with speakers from many field of expertise.
              </p> 
            </div>
          </section>

          <section id="workshop" className="flex flex-col md:flex-row w-full h-auto md:h-64 bg-red text-white p-0">
              <div className="bg-[url('../images/city-bg.webp')] bg-cover w-full md:w-1/3 h-64"/>
              <div className='p-10 w-full md:w-2/3'>
                <h2>Workshop</h2>
                <p>
                  Industrial Workshop, a breathtaking workshop event providing experience of solving current industrial problems with speakers from many fields of expertise. This year, Industrial Workshop will be expanded into an international-scale event.
                </p>
                <br/>
                <p>
                  The theme of the 2021 Industrial Workshop 2021 is
                </p>
              </div>
          </section>
          
          <section id="wpc" className="flex flex-col md:flex-row w-full h-auto md:h-64 bg-blue text-white p-0">
              <div className='p-10 order-2 w-full md:w-2/3'>
                <h2>White Paper Competition</h2>
                <p>
                  Industrial Workshop, a breathtaking workshop event providing experience of solving current industrial problems with speakers from many fields of expertise. This year, Industrial Workshop will be expanded into an international-scale event.
                </p>
                <br/>
                <p>
                  The theme of the 2021 Industrial Workshop 2021 is
                </p>
              </div>
              <div className="bg-[url('../images/city-bg.webp')] bg-cover w-full md:w-1/3 h-64 order-1 md:order-3"/>

          </section>

          <section id="testimonial" className="flex flex-col items-center w-full h-auto bg-white text-black p-0">
            <div className='text-center py-10'>
                <h2>What they say</h2>
                <p>
                  Here what they say about IW UGM                  
                </p>
            </div>
              <div className="w-full">              
                <Testimonial/>
              </div>
          </section>

          <Footer/>
      </div>
   </>
  )
}


export default IndexPage;