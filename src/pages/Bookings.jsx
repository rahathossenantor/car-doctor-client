import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
            .catch(err => console.error(err.message));
    }, [url]);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
            <h2>Total bookings: {bookings.length}</h2>
        </div>
    );
};

export default Bookings;
