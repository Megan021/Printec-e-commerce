import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-center lg:justify-between px-7 items-center h-[5vh] text-white bg-gradient-to-r from-[#5D24DA] to-[#0398FF] text-xs">
        <div className="flex gap-7 lg:gap-5">
            <p className="flex items-center gap-2"><FaPhone />+9801234567</p>
            <p className="flex items-center gap-2"><MdOutlineMailOutline className="text-lg" />info@example.com</p>
        </div>

        <div className="hidden lg:block">
            <p>Free metro delivery* Sign Up for $30 off your order!</p>
        </div>

        <div className="hidden lg:block">
            <p>Store Location</p>
        </div>
    </div>
  )
}

export default Header