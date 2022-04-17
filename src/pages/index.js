import React from 'react';
import Navbar from "../components/Navbar";
import '../styles/globals.css';
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
   <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>IW UGM 2022</title>
          <link rel="canonical" href="../images/icon.png" />
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
          <section id="about" className="h-screen text-white bg-black">
          <h1>This is About section</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
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