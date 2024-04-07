// import React from 'react'
import CustomProduct from "../components/CustomProduct";
import Header from "../components/Header";
import Blog from "../components/Blog";
import Navbars from "../components/Navbar";
import AboutComp from "../components/AboutComp";
import Printing from "../components/Printing";
import FeatureProduct from "../components/FeatureProduct";
import DiscountCard from "../components/DiscountCard";
import NeedHelp from "../components/NeedHelp";
import PrintingMade from "../components/PrintingMade";
import WhatWeDo from "../components/WhatWeDo";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <div>
        <Header />
        <Navbars />
        <Hero />
        <AboutComp />
        <Printing />
        <FeatureProduct />
        <DiscountCard />
        <NeedHelp />
        <PrintingMade />
        <WhatWeDo />
        <Blog />
        <CustomProduct />
    </div>
  )
}

export default Landing