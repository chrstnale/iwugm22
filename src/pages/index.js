import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import '../styles/globals.css';
import { StaticImage } from 'gatsby-plugin-image';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import { FaBook, FaQuestionCircle, FaRegFileAlt } from 'react-icons/fa';
import TimelineWPC from '../components/Timeline';
import Galeri from '../components/Galeri';
import SEO from '../components/Seo';

const IndexPage = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return (
   <>
      <SEO/>
      <Navbar/>
      <div className="absolute w-full overflow-x-hidden font-axiforma" id="pages">
        
        {/* Hero */}
        <section id="home" className="bg-[url('../images/city-bg.webp')] relative bg-cover min-h-screen w-full flex flex-col md:flex-row items-center justify-center pl-8 md:pl-3">
            <div className='w-60 md:w-96 md:mr-4'
                  data-sal="slide-up"
                  data-sal-duration="500"
                  data-sal-easing="ease"
            >
            <StaticImage
              src='../images/iwugm.webp'
              alt="logo iwugm22"
              className='w-full'
              placeholder='none'
              
            />

            </div>

            <h1 className="text-5xl md:text-7xl text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue to-red whitespace-nowrap"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-easing="ease">
                Industrial<br/>Workshop<br/><span className='font-light'>UGM 20<span className='font-semibold'>22</span></span>
            </h1>
            <div className='absolute bottom-0 w-full left-0 h-12 bg-gradient-to-b from-transparent to-blue'/>
          </section>


          {/* About */}
          <section id="about" className="relative text-white bg-blue flex flex-col md:flex-row w-full">
              <StaticImage
                src='../images/about.webp'
                alt="about"
                className='w-full md:mr-4'
                placeholder='none'
              />
            <div className='mt-8 ml-0 md:mt-0 md:ml-8'
                          data-sal="slide-left"
                          data-sal-duration="500"
                          data-sal-easing="ease">
              <h2>About Us</h2>
              <p>
                Industrial Workshop is an annual event held by Himpunan Mahasiswa Teknik Industri Universitas Gadjah Mada. Industrial Workshop is a spectacular workshop event providing an experience of solving current industrial problems with speakers from many fields of expertise.
                <br/><br/>
                The history of this event started with Ernographic Design Workshop (EDW), which then became an annual workshop that discusses current issues. Beginning in 2019, Industrial Workshop made a branch event, White Paper Competition, which continues this year. 
                <br/><br/>
                This year is the 10th year of the Industrial Workshop and will appoint issues on a global scale crisis with the Grand Theme of: 
                <br/><br/>
                <h3 className='font-deco font-bold'>“Supply Chain Instability”</h3>
                <br/>
                The Industrial Workshop will be divided into two branches of events: a Workshop with a simulation of case solving in the form of group games and a Seminar that will be filled with several sessions of presentations from different experienced speakers.
              </p>
            </div>
          </section>

          {/* Galeri */}
          <section className=" relative w-full h-auto bg-blue text-white pt-0 pb-20">
            <div className='w-full'>
              <div className='text-center py-10'
                  data-sal="zoom-in"
                  data-sal-duration="500"
                  data-sal-easing="ease">
                  <h3>Last Year’s</h3>
                  <p>These are the highlights and memories from previous years of Industrial Workshop.</p>
              </div>
              <Galeri/>
            </div>
            <div className='absolute bottom-0 w-full left-0 h-12 bg-gradient-to-b from-transparent to-black'/>
          </section>          

          {/* WPC */}
          <section id="wpc" className="relative text-white bg-black flex flex-col lg:flex-row w-full">
            <StaticImage
                src='../images/poster-wpc.png'
                alt="WPC"
                className='w-full h-full md:mr-4 order-2'
                placeholder='none'
              />
            <div className='mt-8 mr-0 md:mt-0 md:mr-8 order-1'
                data-sal="slide-right"
                data-sal-duration="500"
                data-sal-easing="ease">
                <h2>White Paper Competition</h2>
                <p>
                  The white paper is a short document that summarizes the result of research and technology on an issue that can be applied to answer the problem. The white paper briefly describes the issues to be resolved, data analysis, and recommendations for solutions given in a sharp, coherent, systematic, and comprehensive manner.
                  <br/><br/>
                  The theme of the 2022 Industrial Workshop White Paper Competition is 
                </p>
                <br/>
                <h3 className='font-deco font-bold'>“Overcome Global Issues on Supply Chain Instability in Various Industries“.</h3>

                <br/>
                <div className='grid grid-cols-3 md:grid-cols-4 justify-items-center p-5 gap-y-4 '
                  data-sal="zoom-in"
                  data-sal-duration="500"
                  data-sal-easing="ease">
                  <a href="https://drive.google.com/drive/folders/1KgDJs_WE4rTwTJ89_qtzBPW-7ugtSzXn?usp=sharing" target='_blank' rel="noopener noreferrer" className='text-center rounded-md cursor-pointer flex flex-col items-center hover:text-red'>
                    <FaBook className='text-3xl mb-2'/>
                    <p>Guidebook</p>
                  </a>
                  <a href="https://drive.google.com/drive/folders/1k8Ux43tE-OGOIOp-1zT0RQWe8oUhN5yf?usp=sharing" target='_blank' rel="noopener noreferrer" className='text-center rounded-md cursor-pointer flex flex-col items-center hover:text-red'>
                    <FaQuestionCircle className='text-3xl mb-2'/>
                    <p>FAQ</p>
                  </a>
                  <a href='https://drive.google.com/drive/folders/1kWEtxNU7NCMINKCVWQ2fyqKgtYSR9cnp?usp=sharing' target='_blank' rel="noopener noreferrer" className='text-center rounded-md cursor-pointer flex flex-col items-center hover:text-red'>
                    <FaRegFileAlt className='text-3xl mb-2'/>
                    <p>Required File</p>
                  </a>
                  <span className='col-span-3 md:col-span-1 p-3 cursor-pointer rounded-md shadow-2xl font-medium text-black bg-white opacity-20 flex justify-center items-center' >
                        Closed Registration
                  </span>
              </div>
            </div>
          </section>

          {/* WPC Timeline */}
          <section className=" relative w-full h-auto bg-black text-white pt-0 pb-20">
            <div className='text-center pb-10'>
                <h3
                data-sal="zoom-in"
                data-sal-duration="500"
                data-sal-easing="ease">White Paper Competition Timeline</h3>
            </div>
            <div className='w-full'>
              <TimelineWPC/>
            </div>
            <div className='absolute bottom-0 w-full left-0 h-12 bg-gradient-to-b from-transparent to-red'/>
          </section>
          
          {/* Workshop */}
          <section id="workshop" className="relative text-white bg-red flex flex-col md:flex-row w-full pb-20">
            <StaticImage
              src='../images/poster-workshop.png'
              alt="workshop"
              className='w-full h-full md:mr-4'
              placeholder='none'
            />
            <div className='mt-8 ml-0 md:mt-0 md:ml-8'
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-easing="ease">
                <h2>Workshop</h2>
                <p>
                  Workshop is one of the series of Industrial Workshop that provides some materials on supply chains and gives a challenge for the participant in the form of case studies from the company as a contributor to be completed together with their groups. With case studies, participants will learn what templates are relevant to use in problem-solving and how to solve problems in the company nowadays.
                  <br/><br/>
                  The theme of the 2022 Industrial Workshop is        
                </p>
                <br/>
                <h3 className='font-deco font-bold'>“Supply Chain Instability: Responding Disruption to Achieve a Resilient Supply Chain”</h3>
                <br/>
                <p>
                  Industrial Workshop will be held offline <br/>
                  <br/>
                </p>
                <h4 className='text-center'>at Cavinton Hotel Yogyakarta</h4>
                <h4 className='text-center'>on Saturday, 10 September 2022</h4>
                <p className='text-center'>8:00 am - 5:00 pm (GMT +7)</p>
                <br/>
                <a href="http://bit.ly/IW2022-location" target='blank' rel='noopener noreferrel' className='text-center mb-4 font-semibold text-base text-white hover:text-black py-2 flex justify-center items-center' >
                  Location Maps
                </a>
                <a href="/register/workshop" className='text-center navbar-items shadow-2xl font-semibold text-base text-white bg-blue hover:bg-gradient-to-r hover:from-blue hover:to-white hover:text-black py-2 flex justify-center items-center' >
                  Register for Workshop
                </a>
              </div>
          </section>

          <section className=" relative w-full h-auto bg-red text-white pt-0 pb-20">
            <div className='flex flex-col md:flex-row w-full text-black gap-6'
                  data-sal="slide-left"
                  data-sal-duration="500"
                  data-sal-easing="ease">
              <div  className='w-full md:w-1/3 p-4 bg-white rounded-2xl'>
                <p className='font-bold'>Benefits:</p>
                <p>+ E-certificate</p>
                <p>+ Lunch & 2x coffee break</p>
                <p>+ Direct feedback from juries</p>
                <p>+ Workshop kit</p>
                <p>+ Total Prize IDR5,000,000++</p>
              </div>
              <div className='w-full md:w-1/3 p-4 bg-white rounded-2xl'>
                <p className='font-bold'>Registration Fee:</p>
                <p>Single ticket IDR 200,000</p>
                <p>Bundle for 2 IDR 275,000</p>
                <p>Bundle for 3 IDR 400,000</p>
              </div>
              <div className='w-full md:w-1/3 p-4 bg-white rounded-2xl'>
                <p className='font-bold'>Payment channel:</p>
                <p>BCA 4561200071</p>
                <p>BNI 0302872163</p>
                <p>a.n. Natalia Candella</p>
                <p>OVO, DANA, GoPay, ShopeePay</p>
                <p>087770207972</p>
                <p>a.n. Faiza Ulinnuha</p>
              </div>
            </div>
            <div className='absolute bottom-0 w-full left-0 h-12 bg-gradient-to-b from-transparent to-black'/>
          </section>

          {/* Seminar */}
          <section id="seminar" className="relative text-white bg-black flex flex-col md:flex-row w-full pb-20">
            <StaticImage
              src='../images/poster-workshop.png'
              alt="seminar"
              className='w-full h-full md:mr-4 order-1 md:order-3'
              placeholder='none'
            />
            <div className='mt-8 mr-0 md:mt-0 md:mr-8 order-2'
                      data-sal="slide-right"
                      data-sal-duration="500"
                      data-sal-easing="ease">
                <h2>Seminar</h2>
                <p>
                  Learning something using basic concepts is sometimes still not enough. What is happening in the present and its reasons will be much more important to study. The Industrial Workshop provide us with a forum in the form of a Seminar containing expertise in their fields. The experts will share their experiences and perspectives on what is happening in the supply chain world.
                </p>
                <br/>
                <p>
                  Industrial Workshop’s Seminar will be held online 
                </p>
                <br/>
                <h4 className='text-center'>on Sunday, 11 September 2022</h4>
                <p className='text-center'>1:00 pm -  5:30 pm (GMT +7)</p>
                <h4 className='text-center'>via Zoom Meeting</h4>
                <h4 className='text-center'>FREE Registration</h4>
                <br/>
                <p>Benefit: E-certificate</p>
                <br/>
                <a href="/register/seminar" className='text-center navbar-items shadow-2xl font-semibold text-base text-white bg-blue hover:bg-gradient-to-r hover:from-blue hover:to-white hover:text-black py-2 flex justify-center items-center' >
                  Register for Seminar
                </a>
              </div>
              <div className='absolute bottom-0 w-full left-0 h-12 bg-gradient-to-b from-transparent to-white'/>
            </section>


          {/* Testimonial */}
          <section id="testimonial" className="relative flex flex-col items-center w-full h-auto pb-20 bg-white text-black p-0">
            <div className='text-center py-10'
                      data-sal="zoom-in"
                      data-sal-duration="500"
                      data-sal-easing="ease">
                <h2>Testimonial</h2>
                <p>Here what they said about IW UGM</p>
            </div>
              <div className="w-full">              
                <Testimonial/>
              </div>
              <div className='absolute bottom-0 w-full left-0 h-12 bg-gradient-to-b from-transparent to-blue'/>
          </section>

          <section className=' relative w-full bg-blue text-white text-center'>
            <h2 className='p-8'>Sponsored by</h2>
            <div
                data-sal="zoom-in"
                data-sal-duration="500"
                data-sal-easing="ease">
            <StaticImage
                src='../images/pln.png'
                alt="PLN"
                className='w-full md:w-1/2 md:mr-4'
                placeholder='none'
            />
            </div>
          </section>
          <section className=' relative w-full bg-blue text-white text-center'>
             <h2 className='p-8'>Media Partner</h2>
            <div className='flex justify-center mb-16'
            data-sal="zoom-in"
            data-sal-duration="500"
            data-sal-easing="ease">
              <StaticImage
                  src='../images/kompas.png'
                  alt="Kompas.com"
                  className='w-full md:w-1/3 md:mr-4'
                  placeholder='none'
              />
              <StaticImage
                  src='../images/solopos.png'
                  alt="Solopos"
                  className='w-full md:w-1/3 md:mr-4'
                  placeholder='none'
              />
            </div>
            <div className='absolute bottom-0 w-full left-0 h-12 bg-gradient-to-b from-transparent to-black'/>
          </section>

          <Footer/>
      </div>
   </>
  )
}


export default IndexPage;