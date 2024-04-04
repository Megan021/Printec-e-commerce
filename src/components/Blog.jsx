// import React from 'react'

import BlogComp from "./BlogComp";

const Blog = () => {
  const blogs = [1,1,1];
  const blog = [1];
  return (
    <div>
        <div className="container text-center py-14 lg:py-16 px-4 lg:px-0">
            <p className="text-[#7000FE] uppercase text-sm">Most recent news</p>
            <h2 className="text-2xl lg:text-3xl font-medium py-3 pb-12">Read our latest blog posts</h2>

            <div className="hidden lg:grid grid-cols-3 gap-7">
              {
                blogs.map((blog, index) => (
                  <BlogComp key={index} blog={blog} />
                ))
              }
            </div>

            <div className="lg:hidden grid gap-7">
              {
                blog.map((blog, index) => (
                  <BlogComp key={index} blog={blog} />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Blog