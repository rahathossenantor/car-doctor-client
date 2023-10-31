import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="flex flex-col xl:flex-row items-center gap-5">
                <div className="2xl:w-1/2 xl:w-1/2 border">
                    <div className="relative">
                        <img src={person} className="inline-block w-full lg:w-4/6 md:w-4/5 xl:w-4/5" alt="about-image" />
                        <img src={parts} className="border-[10px] border-white inline-block w-3/5 md:w-2/5 lg:w-2/5 xl:w-2/5 absolute bottom-0 right-0 lg:right-16 xl:right-16" alt="about-image" />
                    </div>
                </div>
                <div className="2xl:w-1/2 xl:w-1/2">
                    <div className="w-full lg:w-4/6 2xl:w-5/6">
                        <h4 className="text-[#FF3811] text-2xl">About Us</h4>
                        <h2 className="text-5xl my-3">We are qualified & of experience in this field</h2>
                        <p className="mb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                        <button className="bg-white text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:text-white border py-[9px] px-4">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
