
const Banner = () => {
    return (
        <section id="banner">
            <div className="md:container md:mx-auto text-center banner-bg">
                <div className="w-full h-full 2xl:py-40 xl:py-36 lg:py-[100px] md:py-20 py-16 text-left flex items-center p-5 md:p-5 lg:p-10 xl:p-10 2xl:p-[50px] bg-gradient-to-r from-[#000000cc] to-[#00000066]">
                    <div className="2xl:w-1/2 xl:w-2/3 lg:w-4/6 text-white">
                        <h2 className="2xl:text-7xl xl:text-6xl lg:text-6xl md:text-5xl text-5xl font-semibold">Affordable Price For Car Servicing</h2>
                        <p className="my-5 2xl:text-lg xl:text-lg 2xl:w-2/3 xl:w-2/3 lg:w-5/6 md:w-4/6">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-4">
                            <a><button className="border-white border bg-transparent text-white hover:bg-[#FF3811] hover:border-[#FF3811] py-[9px] px-4">Discover More</button></a>
                            <a><button className="border-white border bg-transparent text-white hover:bg-[#FF3811] hover:border-[#FF3811] py-[9px] px-4">Latest Project</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
