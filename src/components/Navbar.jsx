// import { useContext, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import Swal from "sweetalert2";
// import Switch from "./Switch";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cartIcon.svg";
import searchIcon from "../assets/searchIcon.svg";

const Navbar = () => {
    // const { user, profileAvatar, setProfileAvatar, signOutUser } = useContext(AuthContext);

    const links = <>
        <NavLink to="/"><li className="text-lg px-3 hover:text-[#FF3811]">Home</li></NavLink>
        {/* <NavLink to="/about"><li className="text-lg px-3 hover:text-[#FF3811]">About</li></NavLink> */}
        <NavLink to="/services"><li className="text-lg px-3 hover:text-[#FF3811]">Services</li></NavLink>
        {/* <NavLink to="/blog"><li className="text-lg px-3 hover:text-[#FF3811]">Blog</li></NavLink> */}
        {/* <NavLink to="/contact"><li className="text-lg px-3 hover:text-[#FF3811]">Contact</li></NavLink> */}
        <NavLink to="/login"><li className="text-lg px-3 hover:text-[#FF3811]">Login</li></NavLink>
        <NavLink to="/register"><li className="text-lg px-3 hover:text-[#FF3811]">Register</li></NavLink>
    </>

    // logout user
    // const logOut = () => {
    //     signOutUser()
    //         .then(() => {
    //             setProfileAvatar(null);
    //             Swal.fire({
    //                 title: "Success!",
    //                 text: "User logged out successfully!",
    //                 icon: "success",
    //                 confirmButtonText: "Close"
    //             });
    //         })
    //         .catch(err => {
    //             Swal.fire({
    //                 title: "Error!",
    //                 text: err.message,
    //                 icon: "error",
    //                 confirmButtonText: "Close"
    //             });
    //         });
    // };

    // useEffect(() => {
    //     if (user) {
    //         setProfileAvatar(user.photoURL);
    //     }
    // });

    return (
        <nav className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <div className="navbar bg-base-100 px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden navbar-icon pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a href="/" className="flex items-center justify-center"><img src={logo} className="inline-block w-16" alt="logo" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <div className="2xl:inline-flex xl:inline-flex lg:hidden md:inline-flex hidden">
                        <h3 className="mr-2 text-lg font-poppins">{user ? user?.displayName?.length > 10 ? user.displayName.slice(0, 10) : user.displayName : ""}</h3>
                    </div> */}
                    {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2 2xl:inline-flex xl:inline-flex lg:inline-flex md:hidden hidden">
                        <div className="w-10 rounded-full">
                            <img src={profileAvatar ? profileAvatar : "https://i.ibb.co/bKkKVMn/user.png"} className="inline-block w-full" />
                        </div>
                    </label> */}
                    {/* <Link to={!user && "/login"}><button onClick={user && logOut} className="bn632-hover bn19 px-[20px] py-[6px] mr-3">{user ? "LogOut" : "LogIn"}</button></Link> */}
                    {/* <Switch></Switch> */}
                    <div className="2xl:flex xl:flex lg:flex md:flex hidden gap-5 mr-5">
                        <button><img src={cartIcon} alt="icon" /></button>
                        <button><img src={searchIcon} alt="icon" /></button>
                    </div>
                    {/* <button className="btn btn-outline normal-case text-lg text-[#FF3811] border-[#FF3811]">Appointment</button> */}
                    <button className="bg-white text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:text-white border py-[9px] px-4">Appointment</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
