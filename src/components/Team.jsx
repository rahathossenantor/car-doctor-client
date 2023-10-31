import facbook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

const teamData = [
    {
        "id": 1,
        "img": "https://i.ibb.co/6YKzJsC/1.jpg",
        "name": "Alex Miller",
        "position": "Engine Expert"
    },
    {
        "id": 2,
        "img": "https://i.ibb.co/WVFc2p8/3.jpg",
        "name": "Imteaj Alam",
        "position": "Parts Expert"
    },
    {
        "id": 3,
        "img": "https://i.ibb.co/jw9ZNyq/2.jpg",
        "name": "Mir Shahed",
        "position": "Engine Expert"
    }
];

const Team = () => {

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="text-center">
                <h4 className="text-[#FF3811] text-2xl">Team</h4>
                <h2 className="text-5xl my-3">Meet Our Genius Team</h2>
                <p className="mb-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
            </div>

            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    teamData.map(team => <div key={team?.id} className="border shadow-xl">
                    <figure className="w-full">
                        <div className="flex items-center justify-center p-5 pb-0">
                            <img className="inline-block h-60 w-full rounded-b-none" src={team?.img} alt="service-image" />
                        </div>
                    </figure>
                    <div className="p-5 text-center">
                        <h3 className="font-bold text-2xl mb-1">{team?.name}</h3>
                        <h4 className="text-[19px] text-[#FF3811] mb-1 font-semibold">{team?.position}</h4>
                        <div className="flex gap-2 justify-center">
                            <button><img src={facbook} alt="social-icon" /></button>
                            <button><img src={twitter} alt="social-icon" /></button>
                            <button><img src={linkedin} alt="social-icon" /></button>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Team;
