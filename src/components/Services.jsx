import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/car-doctor-resources/main/services.json");
                const data = await res.json();
                setServices(data);
            }
            catch (e) {
                console.error(e.message);
            }
        })();
    }, []);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="text-center">
                <h4 className="text-[#FF3811] text-2xl">Service</h4>
                <h2 className="text-5xl my-3">Discover Our Best Servoces</h2>
                <p className="mb-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>

            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    services.map((service, idx) => <Service key={idx} service={service}></Service>)
                }
            </div>
            <div className="text-center mt-10">
                <button className="bg-white text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:text-white border py-[9px] px-4">More Services</button>
            </div>
        </div>
    );
};

export default Services;
