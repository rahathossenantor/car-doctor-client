import About from "../components/About";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Products from "../components/Products";
import Services from "../components/Services";
import Team from "../components/Team";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Info></Info>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;
