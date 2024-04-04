// import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeatureProductComp from "./FeatureProductComp"

const FeatureProduct = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const product = [1, 1, 1, 1, 1];
    return (
        <div className="bg-[#F5F6FB] pt-16 pb-3 px-4 lg:px-0">
            <div className="lg:w-[30%] mx-auto text-center">
                <h3 className="text-sm font-medium uppercase text-[#7000FE]">featured products</h3>
                <h2 className="text-4xl font-medium py-4">Amazing products <span className="text-[#7000FE]">ready for your</span> Printec</h2>
                <p className="pb-12">Choose from 250+ produxts for your e-commerce store</p>
            </div>

            <div>
                <Carousel 
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                infinite={true}
                arrows={false}
                transitionDuration={500}
                dotListClass="custom-dot-list-style"
                swipeable={true}
                draggable={true}>
                    {product.map((index, product) => (
                        <FeatureProductComp key={index} product={product} />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default FeatureProduct