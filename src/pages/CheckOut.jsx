import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const CheckOut = () => {
    const { service_id, title, img, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    // book new service
    const bookService = async (e) => {
        e.preventDefault();
        const formData = e.target;

        const name = formData.name.value;
        const date = formData.date.value;
        const phone = formData.phone.value;
        const email = formData.email.value;
        const order = {
            customarName: name,
            service: title,
            img,
            service_id: service_id,
            date, phone, email, price
        };

        try {
            const res = await fetch("http://localhost:5000/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            });
            const result = await res.json();
            if (result.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Successfully booked",
                    icon: "success",
                    confirmButtonText: "Close"
                });
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <Link to="/"><button className="btn normal-case text-lg rounded-none">Back to home</button></Link>
            <div className="border 2xl:p-20 xl:p-20 lg:p-10 md:p-10 p-5 my-10 bg-[#F3F3F3]">
                <div className="text-center mb-5">
                    <h2 className="text-4xl font-semibold text-[#374151]">Check Out</h2>
                </div>
                <form onSubmit={bookService}>
                    {/* first row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 mb-5">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="name" className="font-semibold text-lg text-[#1b1a1acc]">Full Name <span className="text-red-600">*</span></label>
                            <input type="text" title="name" placeholder="Enter your name" id="name" name="name" className="input input-bordered w-full rounded-none" defaultValue={user?.displayName} required />
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="date" className="font-semibold text-lg">Date <span className="text-red-600">*</span></label>
                            <input type="date" title="date" id="date" name="date" className="input input-bordered w-full rounded-none" required />
                        </div>
                    </div>
                    {/* second row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 mb-5">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="phone" className="font-semibold text-lg text-[#1b1a1acc]">Phone</label>
                            <input type="text" title="phone" placeholder="Enter your phone" id="phone" name="phone" className="input input-bordered w-full rounded-none" />
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="email" className="font-semibold text-lg text-[#1b1a1acc]">Email <span className="text-red-600">*</span></label>
                            <input type="email" title="email" placeholder="Enter your email" id="email" name="email" className="input input-bordered w-full rounded-none" defaultValue={user?.email} required readOnly={user && true} />
                        </div>
                    </div>
                    {/* third row */}
                    <div className="mb-5">
                        <label htmlFor="details" className="font-semibold text-lg text-[#1b1a1acc]">Your Message</label>
                        <textarea rows="7" placeholder="Type details" id="details" name="details" className="textarea textarea-bordered w-full text-base rounded-none" />
                    </div>
                    <input type="submit" value="Confirm Order" className="btn btn-block normal-case text-lg text-white hover:text-[#FF3811] bg-[#FF3811] hover:bg-white hover:border hover:border-[#FF3811] rounded-none" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
