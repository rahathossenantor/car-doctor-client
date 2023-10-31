import Product from "./Product";

const products = [
    {
        "id": 1,
        "img": "https://i.ibb.co/QpHmKkt/6.png",
        "name": "Car Engine Plug",
        "price": 22.4,
        "rating": 3
    },
    {
        "id": 2,
        "img": "https://i.ibb.co/6NJB7kd/1.png",
        "name": "Car Air Filter",
        "price": 24.9,
        "rating": 5
    },
    {
        "id": 3,
        "img": "https://i.ibb.co/93ddKxp/3.png",
        "name": "Cools Led Light",
        "price": 17.4,
        "rating": 4
    },
    {
        "id": 4,
        "img": "https://i.ibb.co/gtY6CL2/2.png",
        "name": "Cools Led Light",
        "price": 72.4,
        "rating": 5
    },
    {
        "id": 5,
        "img": "https://i.ibb.co/hV1CVsL/5.png",
        "name": "Car Air Filter",
        "price": 24,
        "rating": 5
    },
    {
        "id": 6,
        "img": "https://i.ibb.co/zmmdTCh/4.png",
        "name": "Cools Led Light",
        "price": 17.4,
        "rating": 4
    }
];

const Products = () => {

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 my-20">
            <div className="text-center">
                <h4 className="text-[#FF3811] text-2xl">Popular Products</h4>
                <h2 className="text-5xl my-3">Browse Our Products</h2>
                <p className="mb-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
            </div>

            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    products.map(product => <Product key={product?.id} product={product}></Product>)
                }
            </div>
            <div className="text-center mt-10">
                <button className="bg-white text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:text-white border py-[9px] px-4">More Products</button>
            </div>
        </div>
    );
};

export default Products;
