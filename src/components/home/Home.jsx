import Hero from "./hero/Hero.jsx";
import AboutCard from "../about/AboutCard.jsx";
import HAbout from "./HAbout.jsx";
import Test from "../testiomonal/Test.jsx";
import HBlog from "./HBlog.jsx";
import HPrice from "./HPrice.jsx";

function Home() {
    return (
        <>
            <Hero/>
            <AboutCard />
            <HAbout />
            <Test />
            <HBlog />
            <HPrice />
        </>
    );
}

export default Home;