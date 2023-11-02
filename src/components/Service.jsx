import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Service = ({ service }) => {

    return (
        <div className="border shadow-xl">
            <figure className="w-full">
                <div className="flex items-center justify-center p-5 pb-0">
                    <img className="inline-block h-60 w-full rounded-b-none" src={service?.img} alt="service-image" />
                </div>
            </figure>
            <div className="p-5">
                <h4 className="font-bold text-2xl mb-2">{service?.title}</h4>
                <div className="flex justify-between mb-1">
                    <h4 className="text-[19px] text-[#FF3811] font-semibold">Price : ${service?.price}</h4>
                    <Link to={`checkout/${service?._id}`}><button className="text-[19px] text-[#FF3811] font-semibold">--&gt;</button></Link>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired
};

export default Service;
