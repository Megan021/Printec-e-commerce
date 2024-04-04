// import React from 'react'
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import BlogComp from "../components/BlogComp";

const MainBlog = () => {
  const blogs = [1,1,1,1,1,1];
  return (
    <div>
      <Navbar />
      <Banner title='blog' titleTwo='blog' />

      <div>
        <div className="container text-center py-14 lg:py-16 px-4 lg:px-0">
            <p className="text-[#7000FE] uppercase text-sm">Most recent news</p>
            <h2 className="text-2xl lg:text-3xl font-medium py-3 pb-12">Read our latest blog posts</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 gap-y-12">
              {
                blogs.map((blog, index) => (
                  <BlogComp key={index} blog={blog} />
                ))
              }
            </div>

        </div>
    </div>
    </div>
  )
}

export default MainBlog