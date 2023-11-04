import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import bgImage from "../assets/images/login/login.svg";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Register = () => {
    const [isShow, setIsShow] = useState(false);
    const [errorStatus, setRrrorStatus] = useState("");

    const {
        setProfileAvatar,
        registerUserWithEmailAndPass,
        signInUserWithGoogle,
        signInUserWithGitHub
    } = useAuth();

    const navigate = useNavigate();

    const handleEmailPassRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;
        const terms = event.target.terms.checked;

        // reset error status
        setRrrorStatus("");

        if (pass.length < 6) {
            setRrrorStatus("Password must be at least 6 characters!");
            return;
        }
        else if (!/[A-Z]/.test(pass)) {
            setRrrorStatus("Password must have at least one upper case character!");
            return;
        }
        else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(pass)) {
            setRrrorStatus("Password must have at least one special character!");
            return;
        }
        else if (!terms) {
            setRrrorStatus("Please accept our terms & conditions!");
            return;
        }

        // create new user account with email and password
        registerUserWithEmailAndPass(email, pass)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name
                })
                    .then(() => {
                        setProfileAvatar(res.user.photoURL);
                    }).catch((error) => {
                        setRrrorStatus(error.message);
                    });
                event.target.reset();
                Swal.fire({
                    title: "Success!",
                    text: "Registration successful!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                setProfileAvatar(res.user.photoURL);
                navigate("/");
            })
            .catch(err => setRrrorStatus(err.message));
    };

    // create new user with google
    const handleGoogleRegister = () => {
        signInUserWithGoogle()
            .then(res => {
                setProfileAvatar(res.user.photoURL);
                Swal.fire({
                    title: "Success!",
                    text: "Registration successful!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                navigate("/");
            })
            .catch(err => setRrrorStatus(err.message));
    };

    // create new user with github
    const handleGitHubRegister = () => {
        signInUserWithGitHub()
            .then(res => {
                setProfileAvatar(res.user.photoURL);
                Swal.fire({
                    title: "Success!",
                    text: "Registration successful!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                navigate("/");
            })
            .catch(err => setRrrorStatus(err.message));
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-14">
            <div className="flex flex-col lg:flex-row xl:flex-row">
                <div className="w-full lg:w-1/2 xl:w-1/2 flex justify-center items-center">
                    <img src={bgImage} alt="bg-image" className="inline-block" />
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center">
                    <form onSubmit={handleEmailPassRegister} className="border p-6 w-[350px] md:w-[390px] lg:w-[380px] xl:w-[400px] bg-base-100 shadow-2xl">
                        <div className="text-center mb-5">
                            <h2 className="text-4xl font-medium">Sign Up Now!</h2>
                        </div>
                        <div className="form-control">
                            <label className="label py-1">
                                <span className="text-lg">Full name <span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" placeholder="Full name" name="name" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="text-lg">Email <span className="text-red-500">*</span></span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="text-lg">Password <span className="text-red-500">*</span></span>
                            </label>
                            <div className="relative form-control">
                                <input required type={isShow ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered rounded-none" />
                                <span onClick={() => setIsShow(!isShow)} className="absolute h-full flex items-center top-0 right-3 cursor-pointer">{isShow ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>}</span>
                            </div>
                            <div className="mt-3">
                                <input type="checkbox" className="cursor-pointer" name="terms" id="terms" />
                                <label className="ml-2 cursor-pointer" htmlFor="terms">Accept our terms & conditions</label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="px-7 py-[8px] border-[#FF3811] border bg-transparent text-[#FF3811] hover:bg-[#FF3811] hover:text-white">Register</button>
                        </div>
                        <p className="my-3">Already have an acount? <Link className="text-blue-700 underline font-medium" to="/login">Login</Link></p>
                        <div className="text-center">
                            <p className="text-xl mb-2">-------------or-------------</p>
                            <div className="flex items-center justify-center gap-5">
                                <button onClick={handleGoogleRegister}><img src="https://i.ibb.co/7j9whwL/search.png" className="w-10 cursor-pointer" alt="Google" /></button>
                                <button onClick={handleGitHubRegister}><img src="https://i.ibb.co/vxj4vrN/github.png" className="w-10 cursor-pointer" alt="GtHub" /></button>
                            </div>
                        </div>
                    </form>
                    {errorStatus && <div>
                        <p className="text-red-500 text-lg font-medium">{errorStatus}</p>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Register;
