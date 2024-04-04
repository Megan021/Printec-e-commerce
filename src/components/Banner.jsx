import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Banner = ({ title, titleTwo }) => {
  return (
    <>
      <div className="bg-[url('/images/banner.jpg')] text-center  bg-cover h-[25vh] lg:h-[30vh] flex justify-center items-center bg-no-repeat bg-bottom bg-opacity-35 object-cover object-bottom">
        <div className="w-full h-full flex justify-center items-center">
          <div>
            <h2 className="text-3xl capitalize font-medium pb-2">{title}</h2>
            <p className="capitalize text-sm font-normal flex items-center">
              <Link to={"/"}>Home</Link> <MdOutlineKeyboardArrowRight /> {titleTwo}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  title: PropTypes.object,
  titleTwo: PropTypes.object,
};

export default Banner;