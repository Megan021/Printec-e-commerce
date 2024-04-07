// import React from 'react'
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { TbMinusVertical } from "react-icons/tb";

const BlogDetail = () => {
    return (
        <div>
            <Navbar />
            <Banner title="blog" titleTwo="Blog Detail" />
            <div className="container lg:w-[65%] py-12 md:py-16 px-4 lg:px-0">
                <h3 className="text-sm font-medium text-[#7000FE] capitalize">Print Shop</h3>
                <h2 className="py-4 font-semibold text-3xl">How to find peak season trends with free tools from google</h2>

                <div className="flex items-center text-sm font-light pb-5">
                    <date>April 07, 2024</date>
                    <TbMinusVertical className="text-base"/>
                    <p>By Admin</p>
                </div>

                <img src="images/blog-detail.jpg" className="rounded-3xl" />
                <p className="text-sm py-6">Lorem ipsum dolor sit met, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna lirabe ites ipsum dolor sit amet</p>

                <p className="text-sm">Online printing can be expensive but there are certain elements that you should be aware of and that will help to ensure that you get the quality you deserve at the right price. There are things to look out including the pricing and the delivery charges. Our buying printing online guide has our top tips and advice which is detailed below.</p>

                <div className="md:flex items-center justify-center gap-10 py-12 text-justify">
                    <div className="flex-1 mb-6 md:mb-0">
                        <img src="images/blog-detail2.jpg" className="rounded-3xl w-[100%]" />
                    </div>

                    <div className="flex-1">
                        <p className="text-sm pb-5">Consider your printing needs: Before you decide on the website you are going to use, it is important to check that it first meets your printing needs. Some companies will specialise in particular areas, others will be limited in what they can print, and others will offer a full range of services. You can check our Print services page to see what we offer.Consider your printing needs: Before you decide on the website you are going to use, it is important to check that it first meets your printing needs. </p>
                        <p className="text-sm">Print Quality and Pricing: If you are looking for top quality printing and affordable pricing, Print have you covered. Cheaper printing costs shouldn’t mean poor quality so before you place your order, be sure to do your homework. Check reviews and see what others are saying. Cheap might sound good, but poor quality printing can affect your business. You want to make the best impression you can. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

                <p className="text-sm">Pages vs Leaf: Online printing businesses use a number of phrases and terms that you may not be familiar with. Will you require printing on single-sided pages or double-sided print? You will find that some printing companies use the term leaf for a single sheet of paper and page will refer to a side of the paper.</p>
            </div>
        </div>
    )
}

export default BlogDetail