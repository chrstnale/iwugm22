import React from 'react';
import Navbar from "../components/Navbar";
import '../styles/globals.css';
import { Helmet } from "react-helmet"
import iwugm from "../images/iwugm.png";
import { StaticImage } from 'gatsby-plugin-image';

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
      <div className="absolute top-16 overflow-x-hidden bg-white" id="pages">
        <section id="home" className="h-screen w-full flex flex-col md:flex-row items-center justify-center pl-8 md:pl-3"
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-easing="ease-in-out"
          ><StaticImage
              src='../images/iwugm.png'
              alt="logo iwugm22"
              className='w-60 md:w-96 md:mr-4'
            />
            <h1 className="text-5xl md:text-7xl text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue to-red whitespace-nowrap">
                Industrial<br/>Workshop<br/><span className='font-light'>UGM 20<span className='font-semibold'>22</span></span>
            </h1>
          </section>
          <section id="about" className="h-screen text-center text-white bg-black">
            <h1>This is About section</h1>
            <p>Industrial Workshop is an annual event held by Himpunan Mahasiswa Teknik Industri Universitas</p>
            <br/>
            <p>
              This year is the 9ᵗʰ year of Industrial Workshop. The history of this event is started with Ernographic
              Design Workshop (EDW), which then became an annual workshop that discusing about current situatuion.
              Starting in 2019, Industrial Workshop made a branch event, White Paper Competition, and it is continued
              this year.</p>
          </section>
          <section id="workshop" className="h-screen">
          <h1>This is Workshop section</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          </section>
          <section id="wpc" className="h-screen text-white bg-black">
          <h1>This is WPC section</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          </section>
          <section id="sponsor" className="h-screen">
          <h1>This is Sponsor section</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          </section>
          <section id="contact" className="text-white bg-black">
          <h1>This is Contact section</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
          </section>
      </div>
   </>
  )
}


export default IndexPage;