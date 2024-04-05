import { Link } from "react-router-dom";

const ProductComp = () => {
    const images = [
        "images/mouse-pad.png",
        "images/product.png",
        "images/caps.jpg",
        "images/sweatshirt.png"
    ];

    // Function to get a random image from the array
    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

    // Get a random image
    const randomImage = getRandomImage();

    return (
        <Link to="/product-detail">
            <div className="ml-5 lg:ml-0 text-center w-[90%] mb-6 group hover:border-rounded-xl hover:bg-white hover:shadow-md rounded-3xl transition duration-500">
                <div className="">
                    <img src={randomImage} className="rounded-3xl" />
                </div>
                <h2 className="pt-4 text-sm">Sticker</h2>
                <p className="pb-2 font-medium">$9 - $20</p>
                <div className="px-3 pb-4">
                    <button className="group-hover:bg-black text-[#F5F6FB] rounded-full p-3 px-6 w-full transition duration-300">Personalize</button>
                </div>
            </div>
        </Link>
    )
}

export default ProductComp;