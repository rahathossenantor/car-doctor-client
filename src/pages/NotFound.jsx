import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import errImage from "../assets/error.png";

const NotFound = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 h-screen flex justify-center items-center">
            <div className="text-center">
                <div>
                    <img className="inline-block 2xl:w-4/6 xl:w-7/12 lg:w-3/6 md:w-3/6 w-5/6" src={errImage} alt="page-not-found" />
                </div>
                <div>
                    <h3 className="text-4xl my-3">We Are Sorry, Page Not Found!</h3>
                    <p className="mb-5">Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, <br />
                    moved or no longer exist. Check the Url you entered for any mistakes and try again.</p>
                    <Link to="/"><button className="bg-white text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:text-white border py-[9px] px-9">Go back <FaArrowRight className="inline-block"></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
