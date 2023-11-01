import About from "../components/About";
import Banner from "../components/Banner";
import Features from "../components/Features";
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
            <Features></Features>
        </div>
    );
};

export default Home;
