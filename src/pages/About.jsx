// import React from 'react'
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import AboutComp from "../components/AboutComp";
import WhatWeDo from "../components/WhatWeDo";
import PrintDemand from "../components/PrintDemand";
import OurTeam from "../components/OurTeam";

const About = () => {
  return (
    <>
      <Navbar />
      <Banner title='about' titleTwo='about' />
      <AboutComp />

      <div className="container text-center pb-20 py-12 px-4 lg:px-0">
        <h2 className="text-4xl font-medium tracking-tight pb-5">How you can fill your <span className="text-[#7000FE]">ideas with Printec</span></h2>
        <p className="text-xs font-light pb-12">Ideal for creators and online businesses who hate complexity but want results.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 lg:gap-y-0">
          <div>
            <img src="images/ideaimg.jpg" className="rounded-2xl hover:-translate-y-2 transition duration-300" />
            <h2 className="font-medium py-3 pt-6">Pick your product</h2>
            <p className="text-xs font-light w-[77%] mx-auto">From t-shirts to totes, select from our large range of high-quality clothing and accessories to print your design on.</p>
          </div>
          <div>
            <img src="images/ideaimg1.jpg" className="rounded-2xl hover:-translate-y-2 transition duration-300" />
            <h2 className="font-medium py-3 pt-6">Pick your product</h2>
            <p className="text-xs font-light w-[77%] mx-auto">From t-shirts to totes, select from our large range of high-quality clothing and accessories to print your design on.</p>
          </div>
          <div>
            <img src="images/ideaimg2.jpg" className="rounded-2xl hover:-translate-y-2 transition duration-300" />
            <h2 className="font-medium py-3 pt-6">Pick your product</h2>
            <p className="text-xs font-light w-[77%] mx-auto">From t-shirts to totes, select from our large range of high-quality clothing and accessories to print your design on.</p>
          </div>
        </div>
      </div>

      <WhatWeDo />
      <PrintDemand />
      <OurTeam />
    </>
  )
}

export default About