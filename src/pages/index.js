import React from 'react';
import Navbar from "../components/Navbar";
import '../styles/globals.css';
import { Helmet } from "react-helmet"
import iwugm from "../images/iwugm.png";
import { StaticImage } from 'gatsby-plugin-image';
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaFacebookF, FaLinkedin, FaArrowCircleDown, FaArrowAltCircleDown } from 'react-icons/fa';

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
      <div className="absolute overflow-x-hidden bg-white" id="pages">
        <section id="home" className="bg-[url('../images/city-bg.webp')] bg-cover min-h-screen w-full flex flex-col md:flex-row items-center justify-center pl-8 md:pl-3"
          // data-sal="slide-up"
          // data-sal-duration="1000"
          // data-sal-easing="ease-in-out"
          ><StaticImage
              src='../images/iwugm.png'
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

          <section id="testimonial" className="flex flex-col md:flex-row items-center w-full h-auto bg-white text-black p-0">
          <div className='p-10 w-full md:w-1/3'>
                <h2>What they say</h2>
                <p>
                  Here what they say about IW UGM                  
                </p>
              </div>
              <div className="w-full md:w-2/3 h-96">              
             
              </div>
          </section>

          <section id="contact" className="text-white bg-black flex flex-col md:flex-row gap-6">
            <div className='md:w-1/3'>
              <div className='flex items-center'>
                <StaticImage
                  src='../images/iwugm.png'
                  alt="logo iwugm22"
                  className='w-12 md:mr-4'
                />
                <h3>IW UGM 2022</h3>
              </div>
              <address>
                <a href='https://goo.gl/maps/zWLdb67etGk5796PA' target='_blank' className='hover:text-red'>
                  Jl. Grafika No.2 Department of Mechanical and Industrial Engineering, Universitas Gadjah Mada, Yogyakarta 55281, Indonesia
                </a>  
              </address>
            </div>
            <div className='md:w-1/3'>
              <h5>Contact</h5>
              <address>
                <a href='mailto:industrialworkshop.ft@ugm.ac.id' className='hover:text-red' target='_blank'>
                  Email: industrialworkshop.ft@ugm.ac.id
                </a>
              </address>
              <br/>
              <h5>Call us:</h5>
              <address><a href='https://wa.me/6285846173676' target='_blank' className='hover:text-red'>+6285846173676 Natalia Candela</a></address>
              <address><a href='https://wa.me/6287770207972' target='_blank' className='hover:text-red'>+6287770207972 Faiza Ulinnuha</a></address>
            </div>
            <div className='md:w-1/3'>
              <h5>Follow us</h5>
              <div className='rounded-4xl grid grid-cols-6 gap-0 md:gap-2 text-xl justify-items-center mt-2'>
                    <a href='https://line.me/R/ti/p/@qrb0856x' target='_blank' className='rounded-lg border-2 border-white  p-2 h-10 hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <StaticImage src='../images/line-messenger.webp' alt='line-messenger logo' className='w-5 h-5 m-0'/>
                    </a>
                    <a href="https://www.instagram.com/iwugm" target="_blank" className='rounded-lg border-2 border-white p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaInstagram/>
                    </a>
                    <a href="https://twitter.com/iwugm"  target="_blank" className='rounded-lg border-2 border-white  p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaTwitter/>
                    </a>
                    <a href="https://www.youtube.com/channel/UC68uMGtVkPYY3IoaDN1QqXA"  target="_blank" className='rounded-lg border-2 border-white p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaYoutube/>
                    </a>
                    <a href="https://www.facebook.com/IndustrialWorkshop" target="_blank" className='rounded-lg border-2 border-white  p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaFacebookF/>
                    </a>
                    <a href="https://www.linkedin.com/company/iwugm" target="_blank" className='rounded-lg border-2 border-white  p-2 h-fit hover:bg-gradient-to-tr hover:from-blue hover:to-red'>
                        <FaLinkedin/>
                    </a>
                </div>
            </div>
          </section>
      </div>
   </>
  )
}


export default IndexPage;