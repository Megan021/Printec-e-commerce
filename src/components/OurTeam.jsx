// import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamComp from "./TeamComp";
// import Team from "../assets/team.jpg";

const OurTeam = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
        <div className="">
            <div className="container text-center pb-20 pt-3">
                <p className="uppercase text-xs font-medium text-[#7000FE]">our team</p>
                <h2 className="text-4xl font-semibold tracking-tight py-5 pb-9 px-4 lg:px-0">We are the best <span className="text-[#7000FE]">team!</span></h2>

                {/* <div className="grid grid-cols-4 gap-6">
                    <div>
                        <img src={Team} className="rounded-3xl" />
                        <h2 className="font-medium py-4 pb-1">Adeline Tay</h2>
                        <p className="text-xs font-light">Web Designer</p>
                    </div>
                    <div>
                        <img src={Team} className="rounded-3xl" />
                        <h2 className="font-medium py-4 pb-1">Adeline Tay</h2>
                        <p className="text-xs font-light">Web Designer</p>
                    </div>
                    <div>
                        <img src={Team} className="rounded-3xl" />
                        <h2 className="font-medium py-4 pb-1">Adeline Tay</h2>
                        <p className="text-xs font-light">Web Designer</p>
                    </div>
                    <div>
                        <img src={Team} className="rounded-3xl" />
                        <h2 className="font-medium py-4 pb-1">Adeline Tay</h2>
                        <p className="text-xs font-light">Web Designer</p>
                    </div>
                </div> */}

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
                            <TeamComp key={index} product={product} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default OurTeam