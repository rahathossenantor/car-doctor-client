import PropTypes from "prop-types";

const BookingCard = ({ booking, deleteBookedService }) => {

    return (
        <tr className="flex flex-col lg:flex-row xl:flex-row justify-between">
            <td className="flex items-center justify-center">
                <button onClick={() => deleteBookedService(booking._id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td className="flex-1">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={booking.img} alt="booking-image" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{booking.service}</h3>
                    </div>
                </div>
            </td>
            <td className="flex items-center justify-start">
                <h5 className="text-base">{booking.customarName}</h5>
            </td>
            <td className="flex items-center justify-start">
                <h5 className="text-base">{booking.email}</h5>
            </td>
            <td className="flex items-center justify-start">
                <h5 className="text-base">{booking.date}</h5>
            </td>
            <td className="flex items-center justify-start">
                <button className="bg-white text-[#29B170] border-[#29B170] hover:bg-[#29B170] hover:text-white border py-[9px] px-7">Approved</button>
            </td>
        </tr>
    );
};

BookingCard.propTypes = {
    booking: PropTypes.object.isRequired,
    deleteBookedService: PropTypes.func.isRequired
};

export default BookingCard;
