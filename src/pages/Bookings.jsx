import { useEffect, useState } from "react";
import BookingCard from "../components/BookingCard";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setBookings(res.data))
            .catch(err => console.error(err.message));
    }, [url]);

    const deleteBookedService = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire(
                                "Deleted!",
                                "Your product has been deleted.",
                                "success"
                            );
                            const updatedBookings = bookings.filter(booking => booking._id !== id);
                            setBookings(updatedBookings);
                        }
                    })
                    .catch(err => console.log(err.message));
            }
        });
    };

    const noDataFound = <>
        <div className="text-center mt-10 mb-16">
            <img className="inline-block w-20" src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="no-data-found" />
            <div className="text-4xl">No order found!</div>
        </div>
    </>

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <section>
                <div className="md:container md:mx-auto order-bg">
                    <div className="w-full h-full py-24 px-10 text-white bg-gradient-to-r from-[#000000cc] to-[#00000066]">
                        <h2 className="text-5xl font-semibold">Manage All Orders</h2>
                    </div>
                </div>
            </section>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    <tbody>
                        {
                            bookings.map(booking => <BookingCard key={booking?._id} booking={booking} deleteBookedService={deleteBookedService} ></BookingCard>)
                        }
                    </tbody>
                </table>
            </div>
            {!bookings.length && noDataFound}
        </div>
    );
};

export default Bookings;
