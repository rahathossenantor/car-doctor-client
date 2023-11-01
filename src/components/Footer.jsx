import logo from "../assets/logo.svg";
import { FaGoogle, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-16">
                {/* news letter */}
                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5">
                    <div className="flex items-center gap-3">
                        <img src="https://htmldemo.net/elehaus/elehaus/assets/images/icons/5.png" alt="icon" />
                        <div className="text-white">
                            <h4 className="text-2xl">Newsletter & Get Updates</h4>
                            <p>Sign up for our newsletter to get up-to-date from us</p>
                        </div>
                    </div>
                    <div className="2xl:text-left xl:text-left lg:text-left md:text-left text-center">
                        <fieldset className="form-control w-full">
                            <div className="relative">
                                <input type="email" placeholder="Enter your email here" className="input w-full" />
                                <button className="bn632-hover bn19 no-radius px-[30px] py-[12px] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5 text-white mt-10">
                    <div>
                        <h5 className="text-xl font-semibold mb-2"><img src={logo} className="w-20" alt="logo" /></h5>
                        <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial</p>
                        <div className="flex gap-3 mt-3">
                            <button><FaGoogle className="text-2xl"></FaGoogle></button>
                            <button><FaTwitter className="text-2xl"></FaTwitter></button>
                            <button><FaInstagram className="text-2xl"></FaInstagram></button>
                            <button><FaLinkedin className="text-2xl"></FaLinkedin></button>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold mb-2">ACCOUNT</h5>
                        <p><a href="">My account</a></p>
                        <p><a href="">My orders</a></p>
                        <p><a href="">Returns</a></p>
                        <p><a href="">Shipping</a></p>
                        <p><a href="">Wishlist</a></p>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold mb-2">STORE</h5>
                        <p><a href="">Affiliate</a></p>
                        <p><a href="">Bestsellers</a></p>
                        <p><a href="">Discount</a></p>
                        <p><a href="">Latest products</a></p>
                        <p><a href="">All Collection</a></p>
                    </div>
                    <div>
                        <h5 className="text-xl font-semibold mb-2">CONTACT US</h5>
                        <p className="mb-2">If you have any question. please contact us <span className="text-[#e73c17]">demo@example.com</span></p>
                        <p><a href="">12/0, Dhaka, BD</a></p>
                        <p><a href="">+1-01234-56789</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;