import calender from "../assets/calender.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";

const data = [
    {
        "id": 1,
        "icon": calender,
        "title": "We are open monday-friday",
        "value": "7:00 am - 9:00 pm"
    },
    {
        "id": 2,
        "icon": phone,
        "title": "Have a question?",
        "value": "+2546 251 2658"
    },
    {
        "id": 3,
        "icon": location,
        "title": "Need a repair?",
        "value": "Gulshan, Dhaka"
    }
];

const Info = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-black text-white py-10">
                {
                    data.map(info => <div key={info?.id} className="flex gap-5 px-5 justify-start md:justify-start lg:justify-center xl:justify-center">
                        <img src={info?.icon} className="block w-10" alt="info-icon" />
                        <div>
                            <p>{info?.title}</p>
                            <h4 className="text-2xl font-semibold">{info?.value}</h4>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Info;
