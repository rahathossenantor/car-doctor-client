import group from "../assets/icons/group.svg";
import person from "../assets/icons/person.svg";
import check from "../assets/icons/check.svg";
import wrench from "../assets/icons/Wrench.svg";
import delivery from "../assets/icons/delivery.svg";

const featuresData = [
    {
        "id": 1,
        "title": "Expert Team",
        "img": group
    },
    {
        "id": 2,
        "title": "Timely Delivery",
        "img": delivery
    },
    {
        "id": 3,
        "title": "24/7 Support",
        "img": person
    },
    {
        "id": 4,
        "title": "Best Equipment",
        "img": wrench
    },
    {
        "id": 5,
        "title": "100% Guranty",
        "img": check
    },
    {
        "id": 6,
        "title": "Timely Delivery",
        "img": delivery
    }
];

const Features = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="text-center">
                <h4 className="text-[#FF3811] text-2xl">Core Features</h4>
                <h2 className="text-5xl my-3">Why Choose Us</h2>
                <p className="mb-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
            </div>

            <div className="grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    featuresData?.map(feature => <div key={feature?.id} className="text-center border p-5 shadow-lg">
                        <img src={feature?.img} className="inline-block" alt="features-icon" />
                        <h4 className="mt-1 text-xl font-semibold">{feature?.title}</h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Features;
