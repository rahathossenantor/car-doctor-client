import PropTypes from "prop-types";

const Product = ({ product }) => {
    return (
        <div className="border shadow-xl">
            <figure className="w-full">
                <div className="flex items-center justify-center p-5 pb-0">
                    <img className="inline-block h-60 rounded-b-none" src={product?.img} alt="service-image" />
                </div>
            </figure>
            <div className="p-5 text-center">
                <h3 className="font-bold text-2xl mb-2">{product?.name}</h3>
                <h4 className="text-[19px] text-[#FF3811] font-semibold">Price : ${product?.price}</h4>
                <div className="rating">
                    {
                        new Array(parseInt(product?.rating)).fill(1).map((ratings, i) =>
                            <input key={i}
                                type="radio" name={`rating-${product?.id}`}
                                className="mask mask-star bg-orange-400"
                                defaultChecked />
                        )
                    }
                    {
                        new Array(5 - parseInt(product?.rating)).fill(1).map((rating, i) =>
                            <input key={i} type="radio" name={`rating-${product?.id}`} className="mask mask-star bg-orange-400" />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired
};

export default Product;
