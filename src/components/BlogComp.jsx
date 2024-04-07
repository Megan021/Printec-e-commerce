// import React from 'react'
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const BlogComp = () => {
  return (
    <div>
      <Link to="/blog-detail">
        <div>
          <img src="/images/blog1.jpg" className="rounded-3xl" />
          <div className="text-left font-medium px-4 group">
            <p className="text-sm text-[#7000FE] mt-5">Print Company</p>
            <h2 className="py-3 cursor-pointer">An Ultimate Guide On How To Make And Sell Merch For Creators</h2>
            <button className="flex gap-2 items-center text-sm font-medium group-hover:text-[#7000FE] transition duration-300">Read More <RxArrowTopRight className="group-hover:rotate-45 transition duration-300" /></button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogComp