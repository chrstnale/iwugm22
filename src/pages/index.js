import React from 'react';
import Navbar from "../components/Navbar";
import '../styles/globals.css';
import { Helmet } from "react-helmet"
import iwugm from "../images/iwugm.png";

const IndexPage = () => {
  return (
   <>
      <Helmet
        title="IW UIGM 2022">
          <meta charSet="utf-8" />
          <title>IW UGM 2022</title>
          <link rel="icon" href={iwugm} />
      </Helmet>
      <Navbar/>
      <div className="absolute top-16" id="pages">
        <section id="home" className="h-screen">
            <h1 className="text-center blue"> Industrial Workshop UGM 2022</h1>
            <h1>Ini h1</h1>
            <h2>Ini h2</h2>
            <h3>Ini h3</h3>
            <h4>Ini h4</h4>
            <p>Ini p</p>
            <p> Industrial Workshop UGM 2022</p>
            <p></p>
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